import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faEllipsisV, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Job} from '../../shared/models/job.model';
import {JobService} from '../shared/job.service';

@Component({
  selector: 'emes-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit, OnDestroy {

  // Icon
  faEllipsisV: IconDefinition = faEllipsisV;

  // Current job
  job: Job;

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

  constructor(private jobService: JobService) {
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

  }

  pause() {

  }

  stop() {

  }
}
