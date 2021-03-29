import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PopupwindowComponent } from './popupwindow/popupwindow.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
   {path:'',component:HomepageComponent},
   {path:'home',component:PopupwindowComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
