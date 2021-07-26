import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuItem } from 'src/app/shared/side-bar/models/menu-items.model';
import { Bin } from '../shared/models/bin.model';

@Component({
  selector: 'emes-bins',
  templateUrl: './bins.component.html',
  styleUrls: ['./bins.component.scss']
})
export class BinsComponent implements OnInit, OnDestroy {

  menuItems: MenuItem[];
  
  // Used for cleaning subscription 
  unsubscribe: Subject<void> = new Subject();
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.unsubscribe)).subscribe((data: {bins: Bin[]}) =>{
      this.menuItems = data.bins.map(p => ({
        id: p.id,
        icon: faHome,
        label: p.name,
        route: [p.id],
        children: []
      }));
    });
    
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
