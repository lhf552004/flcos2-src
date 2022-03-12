import { Component, OnInit } from '@angular/core';
import { DataTableSettings } from 'data-table';

@Component({
  selector: 'flcos-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  settings: DataTableSettings;
  // Indicator whether current user is admin
  isAdmin = true;
  constructor() { }

  ngOnInit(): void {
  }

}
