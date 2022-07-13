import { Injectable } from '@angular/core';
import { Shapes } from '../../enums/shapes.enum';
import { ShapeListService } from '../shape-list.service';

@Injectable()
export class DrawShapeService {
  private _context;
  private _offsetLeft;
  private _offsetTop;
  private isDrawing = false;
  private initialValueX;
  private initialValueY;

  constructor(private shapeListService: ShapeListService) {}

  set context(context) {
    this._context = context;
  }

  set offsetLeft(offsetLeft) {
    this._offsetLeft = offsetLeft;
  }

  set offsetTop(offsetTop) {
    this._offsetTop = offsetTop;
  }

  onMouseDown(event) {
    this.isDrawing = true;
    this.initialValueX = event.clientX - this._offsetLeft;
    this.initialValueY = event.clientY - this._offsetTop;
    this.onMouseMove(event);
  }

  onMouseMove(event) {
    if (this.isDrawing) {
      this._context.clearRect(0, 0, 500, 500);
      this.redrawShapes();
      this._context.fillStyle = '#FF0000';
      this._context.fillRect(
        this.initialValueX,
        this.initialValueY,
        event.clientX - this._offsetLeft - this.initialValueX,
        event.clientY - this._offsetTop - this.initialValueY
      );
    }
  }

  onMouseUp(event) {
    this.onMouseMove(event);
    const coordinates = {
      x: this.initialValueX,
      y: this.initialValueY,
      width: event.clientX - this._offsetLeft - this.initialValueX,
      height: event.clientY - this._offsetTop - this.initialValueY,
    };
    const shape = {
      name: Shapes.RECTANGLE,
      coordinates: coordinates,
    };
    this.shapeListService.addShape(shape);
    this.isDrawing = false;
  }

  private redrawShapes() {
    for (let shape of this.shapeListService.getShapesList()) {
      this._context.fillStyle = '#FF0000';
      this._context.fillRect(
        shape.coordinates.x,
        shape.coordinates.y,
        shape.coordinates.width,
        shape.coordinates.height
      );
    }
  }
}
