import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionAvatarComponent } from './collection-avatar.component';

describe('CollectionAvatarComponent', () => {
  let component: CollectionAvatarComponent;
  let fixture: ComponentFixture<CollectionAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
