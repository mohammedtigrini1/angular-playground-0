import { Injectable } from '@angular/core';

@Injectable()
export class ShapeListService {
  private shapesList: any[] = [];
  constructor() {}

  addShape(shape: any) {
    this.shapesList.push(shape);
  }

  public getShapesList() {
    return this.shapesList;
  }
}
