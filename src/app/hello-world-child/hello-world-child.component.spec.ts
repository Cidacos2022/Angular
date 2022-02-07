import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldChildComponent } from './hello-world-child.component';

describe('HelloWorldChildComponent', () => {
  let component: HelloWorldChildComponent;
  let fixture: ComponentFixture<HelloWorldChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
