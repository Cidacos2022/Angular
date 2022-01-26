import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldPipesComponent } from './hello-world-pipes.component';

describe('HelloWorldPipesComponent', () => {
  let component: HelloWorldPipesComponent;
  let fixture: ComponentFixture<HelloWorldPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
