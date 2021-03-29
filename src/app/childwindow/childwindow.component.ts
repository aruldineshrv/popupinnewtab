import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childwindow',
  templateUrl: './childwindow.component.html',
  styleUrls: ['./childwindow.component.css']
})
export class ChildwindowComponent  implements OnInit  {

  public toggleText = 'Show';
  public show = true;

  ngOnInit(): void {
    this.show=false;

  }

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? 'Hidе' : 'Show';
  }

}
