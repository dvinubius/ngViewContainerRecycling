import { Component } from '@angular/core';
import { DataModel } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  on1 = true;

  dataItems1: DataModel[] = [
    {val: '1'},
    {val: '2'},
    {val: '3'},
    {val: '4'},
    {val: '5'},
  ];

  dataItems2: DataModel[] = [
    {val: '6'},
    {val: '7'},
    {val: '8'},
    {val: '9'},
    {val: '10'},
  ];

  dataItems: DataModel[] = this.dataItems1;


  clicked() {
    const copy = this.dataItems.slice().reverse();
    this.dataItems.splice(0);
    this.dataItems = copy;
    this.dataItems1 = this.dataItems;
  }

  clickedOtherObjects() {
    this.dataItems = this.on1 ? this.dataItems2 : this.dataItems1;
    this.on1 = !this.on1;
  }

  clickedTimeout() {
    const copy = this.dataItems.slice();
    this.dataItems.splice(1);
    setTimeout(() => this.dataItems = copy, 500);
  }
}
