import { Injectable } from '@angular/core';

@Injectable()
export class ShapeListService {
  private shapesList: any[] = [];
  constructor() {}

  addShape(shape: any) {
    this.shapesList.push(shape);
  }

  deleteShape(shape: any) {
    this.shapesList = this.shapesList.filter((s) => s == shape);
  }

  public getShapesList() {
    return this.shapesList;
  }

  public drawShapes() {}
}
