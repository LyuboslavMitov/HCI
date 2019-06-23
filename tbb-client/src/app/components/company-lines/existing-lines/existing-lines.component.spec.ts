import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingLinesComponent } from './existing-lines.component';

describe('ExistingLinesComponent', () => {
  let component: ExistingLinesComponent;
  let fixture: ComponentFixture<ExistingLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
