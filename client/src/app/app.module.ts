import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsermenuComponent } from './header/usermenu/usermenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsermenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
