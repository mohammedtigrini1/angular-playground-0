import { Injectable } from '@angular/core';

@Injectable()
export class DrawShapeService {
  private _context;
  private _offsetLeft;
  private _offsetTop;
  private isDrawing = false;
  private initialValueX;
  private initialValueY;

  constructor() {}

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
      console.log(this.initialValueX, this.initialValueY);
      console.log(
        event.clientX - this._offsetLeft - this.initialValueX,
        event.clientY - this._offsetTop - this.initialValueY
      );
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
    this.isDrawing = false;
  }
}
