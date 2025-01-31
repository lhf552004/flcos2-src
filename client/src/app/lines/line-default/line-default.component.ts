import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest, Observable, Subject} from 'rxjs';
import {max, takeUntil} from 'rxjs/operators';
import {Line} from '../shared/models/line.model';
import {WorkflowSettings} from '../../shared/workflow/models/workflow-settings.model';
import {Vertex} from '../../shared/workflow/models/vertex.model';
import {Workflow} from '../../shared/workflow/models/workflow.model';
import {Section} from '../shared/models/section.model';
import {StorageComponent} from '../storage/storage.component';
import {SvgIconComponent} from 'angular-svg-icon';
import {icon} from '@fortawesome/fontawesome-svg-core';
import {BinService} from '../../bins/shared/bin.service';
import {EquipmentService} from '../../engineerings/shared/equipment.service';
import {SectionService} from '../../engineerings/shared/section.service';
import {Bin} from '../../bins/shared/models/bin.model';
import {Equipment} from '../../engineerings/shared/models/equipment.model';
import {DynamicFormService} from 'dynamic-form';
import {OpcServerService} from '../../shared/services/opc-server.service';
import {OpcVariableValues} from '../../shared/models/opc-variable-values.model';
import {environment} from '../../../environments/environment';
import {IconDefinition, faPlug, faHandshakeSlash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'flcos-line-default',
  templateUrl: './line-default.component.html',
  styleUrls: ['./line-default.component.scss']
})
export class LineDefaultComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(SvgIconComponent, {read: ElementRef}) svgIcons!: QueryList<ElementRef>;
  // Current line
  line: Line;
  sections: Section[];
  // Svg file path
  svg: string;
  storages: Bin[];
  equipments: Equipment[];
  workflowSettings: WorkflowSettings = new WorkflowSettings();

  faPlug: IconDefinition = faPlug;
  faHandshakeSlash: IconDefinition = faHandshakeSlash;

  variableValues: OpcVariableValues;

  private sseUrl = environment.baseUrl + 'stream';
  sseConnected = false;

  gcObjects = new Map<string, any>();

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private binService: BinService,
              private sectionService: SectionService,
              private opcServerService: OpcServerService,
              private route: ActivatedRoute,
              private dynamicFormService: DynamicFormService) {
  }

  ngOnInit(): void {
    this.workflowSettings.isEdited = true;
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: { line: Line }) => {
      this.line = data.line;
      this.svg = 'assets/svgs/' + this.line.name + '.svg';
      // Mock data
      this.sections = data.line.sections.map((section, index, array) => {
        return {
          id: section.id,
          name: section.name,
          status: this.getStatus(),
          jobName: this.line.name + ':00000' + (index + 1)
        };
      });
      console.log(this.line);
    });
    this.connectSSE();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Read the first svg, if any.
      const icn = this.svgIcons.first;
      console.log(icn);
      if (icn) {
        const svg = icn.nativeElement.firstChild;
        console.log(svg);
        const gcObjectsList = svg.querySelectorAll('[devicetype=\'gcobject\']');

        const storages = svg.querySelectorAll('[devicetype=\'storage\']');
        const idsOfStorage = this.getIdsFromSvg(storages);

        const sections = svg.querySelectorAll('[devicetype=\'section\']');
        const idsOfSections = this.getIdsFromSvg(sections);

        const equipments = svg.querySelectorAll('[devicetype=\'equipment\']');
        const idsOfEquipments = this.getIdsFromSvg(equipments);
        const observables: Observable<any>[] = [];
        observables.push(this.binService.getBinsByIds(idsOfStorage).pipe(takeUntil(this.unsubscribe)));
        // observables.push(this.equipmentService.getSectionsByIds(idsOfSections).pipe(takeUntil(this.unsubscribe)));
        // observables.push(this.equipmentService.getEquipmentsByIds(idsOfEquipments).pipe(takeUntil(this.unsubscribe)));
        combineLatest(observables).subscribe(x => {
          this.storages = x[0];
          // this.sections = x[1];
          // this.equipments = x[2];
          storages.forEach(storageElement => {
            const id = storageElement.getAttribute('deviceident');
            const storageData = x[0].find(s => s.id === id);
            let productName = '';
            let height = 0;
            if (storageData) {
              productName = storageData.productName;
              const currenWeight = storageData.currentWeight;
              const maxWeight = storageData.maxWeight;
              height = (currenWeight / maxWeight) * 100;
            }
            const identText = storageElement.querySelector('.product');
            identText.innerHTML = productName;
            const capacity = storageElement.querySelector('.capacity');
            capacity.setAttribute('height', height);
          });
        });
        console.log(storages);
        if (gcObjectsList && gcObjectsList.length > 0) {
          const variables: string[] = [];
          gcObjectsList.forEach(object => {
            const deviceIdent = object.getAttribute('deviceident');
            variables.push(deviceIdent);
            this.gcObjects.set(deviceIdent, object);
          });

          this.opcServerService.getOPCVariableNodeValues(variables).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
            this.variableValues = x;
            gcObjectsList.forEach(element => this.renderElement(element));
          });
        }
      }
    }, 250);  // An estimate of the time it takes for the svg to actually load.
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getIdsFromSvg(list: NodeList): string[] {
    return Array.from(list).map((element: any) => element.getAttribute('deviceident'));
  }

  getStatus(): string {
    const statusNum = Math.floor(Math.random() * 3);
    if (statusNum === 0) {
      return 'Running';
    } else if (statusNum === 1) {
      return 'Suspend';
    } else {
      return 'Error';
    }
  }

  svgClicked($event: any): void {
    console.log($event);
    this.openItem($event.path, 0);
  }

  openItem(paths: any[], index: number): void {
    if (index > paths.length - 1 || paths[index].nodeName.toLowerCase() === 'svg-icon') {
      return;
    }
    const currentPath = paths[index];
    console.log(currentPath.getAttribute('id') + ' with node type: ' + currentPath.nodeName);

    const deviceType = currentPath.getAttribute('devicetype');
    const deviceIdent = currentPath.getAttribute('deviceident');
    console.log('deviceIdent: ' + deviceIdent);
    console.log('deviceType: ' + deviceType);
    if (deviceType !== null && deviceIdent !== null) {
      switch (deviceType) {
        case 'storage':
          this.openStorage(deviceIdent);
          break;
        case 'section':
          this.openSection(deviceIdent);
          break;
        case 'equipment':
          this.openEquipment(deviceIdent);
          break;
      }
    } else {
      this.openItem(paths, ++index);
    }
  }

  openStorage(id: string): void {
    const storage = this.storages.find(s => s.id === id);
    this.dynamicFormService.popModal(StorageComponent, {
      size: 'lg',
      backdrop: 'static',
      windowClass: 'modal-xxxl',
      storage,
      onSubmit: (e: any) => {
      },
      onDismiss: () => {
      },
    });
  }

  openSection(id: string): void {

  }

  openEquipment(id: string): void {

  }

  updateRollerBed() {
    const icn = this.svgIcons.first;
    console.log(icn);
    if (icn) {
      const svg = icn.nativeElement.firstChild;
      console.log(svg);
      const rollerBeds = svg.querySelectorAll('[devicetype=\'rollerBed\']');
      rollerBeds.forEach(rollerBedEle => {
        const deviceIdent = rollerBedEle.getAttribute('deviceident');
        const ioBlock = this.variableValues[deviceIdent];
        const rollerBed = rollerBedEle.querySelector('.rollerBed');
        if (Boolean(ioBlock) === true) {
          rollerBed.setAttribute('fill', 'green');
        } else {
          rollerBed.setAttribute('fill', '#c0c0c0');
        }
      });
    }

  }

  renderElement(element: any) {
    const deviceIdent = element.getAttribute('deviceident');
    const variableValue = this.variableValues[deviceIdent];
    if (variableValue === null) {
      return;
    }
    const valueText = element.querySelector('.value');
    if (valueText) {
      valueText.innerHTML = variableValue.value;
    }
    const statusElement = element.querySelector('.status');
    const commandElement = element.querySelector('.command');
    if (statusElement) {
      this.setFill(variableValue, statusElement);
    }
    if (commandElement) {
      this.setFill(variableValue, commandElement);
    }
  }

  private setFill(variableValue: any, element: any): void {
    if (variableValue === true) {
      // Running status is OK
      element.setAttribute('fill', 'green');
    } else if (variableValue === false) {
      // Running status is error
      element.setAttribute('fill', 'red');
    } else {
      // Running status is passive
      element.setAttribute('fill', 'gray');
    }
  }

  connectSSE(): void {
    const source = new EventSource(this.sseUrl);
    source.addEventListener('open', e => {
      console.log('SSE connected');
      this.sseConnected = true;
    });
    source.addEventListener('error', e => {
      console.log('SSE error ');
      console.log(e);
      // this.sseConnected = false;
    });
    source.addEventListener('message', message => {
      console.log(message.data);
      const changedNode: { nodeId: string, newValue: object } = JSON.parse(message.data);
      this.variableValues[changedNode.nodeId] = changedNode.newValue;
      if (this.gcObjects.has(changedNode.nodeId)) {
        const object = this.gcObjects.get(changedNode.nodeId);
        this.renderElement(object);
      }
      this.opcServerService.updateVariableNodeValue(changedNode.nodeId, changedNode.newValue);
    });
  }


}
