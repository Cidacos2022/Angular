import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldParentComponent } from './hello-world-parent.component';

describe('HelloWorldParentComponent', () => {
  let component: HelloWorldParentComponent;
  let fixture: ComponentFixture<HelloWorldParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
