import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'

import { AppComponent } from './app.component';
import { ProcuctoListComponent } from './productos/procucto-list/procucto-list.component';
import { ProductoFilterPipe } from './productos/producto-filter.pipe';
import { OperaBasComponent } from './calculos/opera-bas/opera-bas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Suma2Component } from './calculos/suma2/suma2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcuctoListComponent,
    ProductoFilterPipe,
    OperaBasComponent,
    Suma2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
