import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AmexioDataModule } from 'amexio-ng-extensions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetreeHeaderComponent } from './detree-header/detree-header.component';
import { AmexioTreeVersionComponent } from './amexio-tree-version/amexio-tree-version.component';

@NgModule({
  declarations: [
    AppComponent,
    DetreeHeaderComponent,
    AmexioTreeVersionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //  , AmexioDataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
