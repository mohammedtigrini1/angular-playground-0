import { Component } from '@angular/core';
import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { DrawShapeService } from './services/draw-shape.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // its important myCanvas matches the variable name in the template
  @ViewChild('myCanvas')
  myCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;

  constructor(private drawShapeService: DrawShapeService) {}

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');
    this.drawShapeService.context = this.context;
    this.drawShapeService.offsetLeft = this.myCanvas.nativeElement.offsetLeft;
    this.drawShapeService.offsetTop = this.myCanvas.nativeElement.offsetTop;
  }

  onMouseDown(event) {
    this.drawShapeService.onMouseDown(event);
  }

  onMouseMove(event) {
    this.drawShapeService.onMouseMove(event);
  }

  onMouseUp(event) {
    this.drawShapeService.onMouseUp(event);
  }
}
