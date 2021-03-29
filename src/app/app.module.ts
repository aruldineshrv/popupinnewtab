import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PopupwindowComponent } from './popupwindow/popupwindow.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PortalModule} from '@angular/cdk/portal';
import { AppComponent } from './app.component';
import { PopoutWindowModule } from 'angular-popout-window';
import { HomepageComponent } from './homepage/homepage.component';
import { ChildwindowComponent } from './childwindow/childwindow.component';
import { PopupModule } from '@progress/kendo-angular-popup';
import 'rxjs/add/observable/of';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PopupwindowComponent,
    HomepageComponent,
    ChildwindowComponent
  ],
  imports: [
    PopupModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PopoutWindowModule ,
    PortalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
