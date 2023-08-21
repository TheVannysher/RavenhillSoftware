import { Component, Input, OnInit } from '@angular/core';

const red = '#ff0000';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() color: string = '';
  title: string = '';
  style = {}
  
  constructor() {}

  ngOnInit(): void {
    this.style = {
      color: this.color,
      backgroundColor: `${this.color}80`,
      border: `1px solid ${this.color}`
    }
  }
}
