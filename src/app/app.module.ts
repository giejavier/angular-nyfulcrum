import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeadertileComponent } from './components/headertile/headertile.component';
import { PropertytickerComponent } from './components/propertyticker/propertyticker.component';
import { PropertytileComponent } from './components/propertytile/propertytile.component';
import { BidtileComponent } from './components/bidtile/bidtile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadertileComponent,
    PropertytickerComponent,
    PropertytileComponent,
    BidtileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
