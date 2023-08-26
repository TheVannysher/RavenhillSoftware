import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator-item',
  templateUrl: './navigator-item.component.html',
  styleUrls: ['./navigator-item.component.scss']
})
export class NavigatorItemComponent implements OnInit {
 
  @Input() active:boolean = false;

  ngOnInit(): void {
    
  }

}
