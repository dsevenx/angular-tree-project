import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AmexioDataModule } from 'amexio-ng-extensions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetreeHeaderComponent } from './detree-header/detree-header.component';
import { AmexioTreeVersionComponent } from './amexio-tree-version/amexio-tree-version.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ContextMenuModule, MenuModule } from '@progress/kendo-angular-menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DetreeHeaderComponent,
    AmexioTreeVersionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeViewModule,
    ContextMenuModule,
    BrowserAnimationsModule,
    MenuModule,
    //  , AmexioDataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
