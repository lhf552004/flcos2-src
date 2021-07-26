import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEllipsisV, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Equipment } from '../shared/models/equipment.model';

@Component({
  selector: 'emes-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;

  // Current section
  equipment: Equipment;

  // Equipment type
  types: any[] = ['discharger', 'mixer', 'packer'];
  // Selected type
  selectedType: any;
  
  // Indicator whether it is a author
  isAuthor: boolean = true;
  // Indicator whether it is a owner
  isOwner: boolean = true;

  // Used for cleaning subscription 
  unsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe(data => {
      if (data.equipment)
        this.equipment = data.equipment;
      console.log(this.equipment)
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  save(close: boolean) {

  }

  close() {

  }

  copy() {

  }

  delete() {

  }

  typeSelected() {

  }

  nameChanged($event) {

  }

}
