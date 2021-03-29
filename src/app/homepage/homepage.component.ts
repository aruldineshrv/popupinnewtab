import { Component } from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent{

  showPortal = false;
  getPor() {
    this.showPortal = false;
  }
}
