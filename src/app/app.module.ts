import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DrawShapeService } from './services/actions/draw-shape.service';
import { ShapeListService } from './services/shape-list.service';
import { SelectShapesService } from './services/actions/select-shapes.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  providers: [DrawShapeService, SelectShapesService, ShapeListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
