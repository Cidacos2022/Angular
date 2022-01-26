import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldInputParComponent } from './hello-world-input-par.component';

describe('HelloWorldInputParComponent', () => {
  let component: HelloWorldInputParComponent;
  let fixture: ComponentFixture<HelloWorldInputParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldInputParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldInputParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
