import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyDetailComponent } from './biography-detail.component';

describe('BiographyDetailComponent', () => {
  let component: BiographyDetailComponent;
  let fixture: ComponentFixture<BiographyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
