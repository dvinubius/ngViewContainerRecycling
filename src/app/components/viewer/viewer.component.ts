import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataModel } from '../../models/data.model';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() dataItems: DataModel[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('#viewer onChanges');
  }

}
