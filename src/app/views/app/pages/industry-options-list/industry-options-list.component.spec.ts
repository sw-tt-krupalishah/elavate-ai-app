import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryOptionsListComponent } from './industry-options-list.component';

describe('IndustryOptionsListComponent', () => {
  let component: IndustryOptionsListComponent;
  let fixture: ComponentFixture<IndustryOptionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryOptionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
