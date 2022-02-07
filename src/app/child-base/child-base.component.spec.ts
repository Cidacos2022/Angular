import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBaseComponent } from './child-base.component';

describe('ChildBaseComponent', () => {
  let component: ChildBaseComponent;
  let fixture: ComponentFixture<ChildBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
