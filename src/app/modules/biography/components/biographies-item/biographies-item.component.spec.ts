import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographiesItemComponent } from './biographies-item.component';

describe('BiographiesItemComponent', () => {
  let component: BiographiesItemComponent;
  let fixture: ComponentFixture<BiographiesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiographiesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiographiesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
