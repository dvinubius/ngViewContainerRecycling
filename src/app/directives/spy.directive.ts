import { Directive, OnChanges, ElementRef, Renderer2, AfterViewInit, OnInit, Input } from '@angular/core';
import { DataRendererComponent } from '../components/data-renderer/data-renderer.component';

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective implements OnInit {

  @Input() appSpy: string;

  constructor() { }

  ngOnInit() {
    console.log('init for ' + this.appSpy);
  }



}
