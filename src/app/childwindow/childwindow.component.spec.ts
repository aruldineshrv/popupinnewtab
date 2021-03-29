import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildwindowComponent } from './childwindow.component';

describe('ChildwindowComponent', () => {
  let component: ChildwindowComponent;
  let fixture: ComponentFixture<ChildwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildwindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
