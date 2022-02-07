import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldLoginComponent } from './hello-world-login.component';

describe('HelloWorldLoginComponent', () => {
  let component: HelloWorldLoginComponent;
  let fixture: ComponentFixture<HelloWorldLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
