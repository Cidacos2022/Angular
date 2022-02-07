import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldForComponent } from './hello-world-for.component';

describe('HelloWorldForComponent', () => {
  let component: HelloWorldForComponent;
  let fixture: ComponentFixture<HelloWorldForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
