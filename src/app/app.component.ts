import { Component, HostListener } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { DrawShapeService } from './services/actions/draw-shape.service';
import { SelectShapesService } from './services/actions/select-shapes.service';

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

  constructor(
    private drawShapeService: DrawShapeService,
    private selectShapeService: SelectShapesService
  ) {}

  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');
    this.drawShapeService.context = this.context;
    this.drawShapeService.offsetLeft = this.myCanvas.nativeElement.offsetLeft;
    this.drawShapeService.offsetTop = this.myCanvas.nativeElement.offsetTop;

    this.selectShapeService.context = this.context;
    this.selectShapeService.offsetLeft = this.myCanvas.nativeElement.offsetLeft;
    this.selectShapeService.offsetTop = this.myCanvas.nativeElement.offsetTop;
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

  onDoubleClick(event) {
    this.selectShapeService.isShapeSelected(event);
    // console.log(event.clientX, event.clientY);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.key);
  }
}
