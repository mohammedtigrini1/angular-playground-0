import { Injectable } from '@angular/core';
import { ShapeListService } from '../shape-list.service';

@Injectable()
export class SelectShapesService {
  private _context;
  private _offsetLeft;
  private _offsetTop;
  private _selectedShape;

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

  isShapeSelected(event) {
    console.log(this.shapeListService.getShapesList());
    for (let shape of this.shapeListService.getShapesList()) {
      if (
        event.clientX - this._offsetLeft >= shape.coordinates.x &&
        event.clientX - this._offsetLeft <=
          shape.coordinates.x + shape.coordinates.width &&
        event.clientY - this._offsetTop >= shape.coordinates.y &&
        event.clientY - this._offsetTop <=
          shape.coordinates.y + shape.coordinates.height
      ) {
        this.drawRectangleSelection(shape);
        this._selectedShape = shape;
      }
    }
  }

  drawRectangleSelection(shape) {
    this._context.strokeStyle = 'blue';
    this._context.lineWidth = 3;
    this._context.strokeRect(
      shape.coordinates.x - 5,
      shape.coordinates.y - 5,
      shape.coordinates.width + 10,
      shape.coordinates.height + 10
    );
  }
}
