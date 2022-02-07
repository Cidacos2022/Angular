import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldDataFromUrlComponent } from './hello-world-data-from-url.component';

describe('HelloWorldDataFromUrlComponent', () => {
  let component: HelloWorldDataFromUrlComponent;
  let fixture: ComponentFixture<HelloWorldDataFromUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldDataFromUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldDataFromUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
