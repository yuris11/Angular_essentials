import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { ControlsComponent } from './controls/controls.component';
import { ElemComponent } from './elem/elem.component';
import { FirstDirective } from './directives/first.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowdataComponent,
    ControlsComponent,
    ElemComponent,
    FirstDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
