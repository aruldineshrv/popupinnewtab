
import {Component, ViewChild, OnInit, ComponentFactoryResolver, ApplicationRef, Injector, OnDestroy } from '@angular/core';
import {CdkPortal,DomPortalHost} from '@angular/cdk/portal';
import {PortalModule} from '@angular/cdk/portal';

@Component({
  selector: 'app-popupwindow',
  template: `
    <ng-container *cdkPortal>
      <ng-content></ng-content>
    </ng-container>
  `
})
export class PopupwindowComponent implements OnInit, OnDestroy {
  @ViewChild(CdkPortal) portal: CdkPortal;
  private externalWindow = null;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector){}

    
  ngOnInit(){
  }
  
    ngAfterViewInit(){
      // STEP 4: create an external window
      this.externalWindow = window.open('', '', 'width=800,height=600,left=200,top=200');
  
      // STEP 5: create a PortalHost with the body of the new window document    
      const host = new DomPortalHost(
        this.externalWindow.document.body,
        this.componentFactoryResolver,
        this.applicationRef,
        this.injector
        );
  
      // STEP 6: Attach the portal
      host.attach(this.portal);
    }
  
    ngOnDestroy(){
      // STEP 7: close the window when this component destroyed    
      this.externalWindow.close()
      
    }
}