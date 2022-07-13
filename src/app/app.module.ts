import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DrawShapeService } from './services/draw-shape.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  providers: [DrawShapeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
