import { Injectable } from '@angular/core';

@Injectable()
export class ShapeListService {
  private shapesList: any[] = [];
  constructor() {}

  addShape(name: string, coordinates: any[]) {}
}
