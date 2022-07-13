import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DrawShapeService } from './services/actions/draw-shape.service';
import { ShapeListService } from './services/shape-list.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  providers: [DrawShapeService, ShapeListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
