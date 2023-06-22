import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './components/show/show.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
