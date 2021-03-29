import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { PopoutWindowModule } from 'angular-popout-window';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISSRD23';

  constructor(private activatedRoute:Router)
   {

   }
   closedialog()
   {
    this.activatedRoute.navigate(['./home'],{skipLocationChange:true});
   }
  // 
}
