import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLabComponent } from './code-lab.component';

describe('CodeLabComponent', () => {
  let component: CodeLabComponent;
  let fixture: ComponentFixture<CodeLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
