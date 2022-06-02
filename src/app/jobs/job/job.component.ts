import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faEllipsisV, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Job} from '../../shared/models/job.model';
import {JobService} from '../shared/job.service';
import {DynamicFormService} from 'dynamic-form';
import {NotificatorService} from '../../core/notificator/notificator.service';
import {Notification} from '../../core/notificator/notification.model';

@Component({
  selector: 'flcos-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit, OnDestroy {

  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;

  // Current job
  job: Job;

  batchNumber: string;

  // Product type
  types: any[] = ['Raw', 'Finished Product', 'Semi-Product'];

  // Selected type
  selectedType: any;

  // Indicator whether it is a author
  isAuthor = true;
  // Indicator whether it is a owner
  isOwner = true;

  // Used for cleaning subscription
  unsubscribe: Subject<void> = new Subject();

  constructor(private jobService: JobService, private dynamicFormService: DynamicFormService, private notificatorService: NotificatorService) {
  }

  ngOnInit(): void {
    this.jobService.object$.pipe(takeUntil(this.unsubscribe)).subscribe(job => {
      if (job) {
        this.job = job;
        if (this.job.recipe) {
          this.job.recipe.ingredients.forEach(i => {
            i.targetWeight = i.percentage * this.job.targetWeight;
          });
        }
      }

      console.log(this.job);
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

  start() {
    this.jobService.start(this.job.id).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  pause() {
    this.jobService.pause(this.job.id).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  stop() {
    this.jobService.stop(this.job.id).pipe(takeUntil(this.unsubscribe)).subscribe();
  }

  scanNumber() {
    if (this.batchNumber) {
      this.jobService.scanBatchNumber(this.job.id, this.batchNumber).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
        if (x.errors && x.errors.length > 0) {
          x.errors.forEach(error => {
            this.notificatorService.sendNotification(new Notification(error, 'danger'));
          });
        }
        if (x.infos && x.infos.length > 0) {
          x.infos.forEach(info => {
            this.notificatorService.sendNotification(new Notification(info, 'info'));
          });
        }
      });
    } else {
      const config = {
        headerText: 'Batch Number is Empty',
        submitText: 'Ok',
        closeText: 'Cancel',
        onSubmit: () => {
        },
        onDismiss: () => {
        },
        notifications: [`Please scan batch number in the input first.`]
      };
      this.dynamicFormService.popNotification(config);
    }
  }
}
