import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBaseComponent } from './parent-base.component';

describe('ParentBaseComponent', () => {
  let component: ParentBaseComponent;
  let fixture: ComponentFixture<ParentBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
