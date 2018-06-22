import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataModel } from '../../models/data.model';

@Component({
  selector: 'app-data-renderer',
  templateUrl: './data-renderer.component.html',
  styleUrls: ['./data-renderer.component.scss']
})
export class DataRendererComponent implements OnChanges {

  changes = 0;

  preText = '{ value : ';
  postText = ' }';
  @Input() data: DataModel;

  constructor() { }

  ngOnChanges() {
    this.changes++;
  }

}
