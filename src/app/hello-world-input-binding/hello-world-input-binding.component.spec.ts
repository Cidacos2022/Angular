import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldInputBindingComponent } from './hello-world-input-binding.component';

describe('HelloWorldInputBindingComponent', () => {
  let component: HelloWorldInputBindingComponent;
  let fixture: ComponentFixture<HelloWorldInputBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldInputBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldInputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
