import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CollectionAvatarContentComponent} from './collection-avatar-content.component';


describe('BiographiesItemComponent', () => {
  let component: CollectionAvatarContentComponent;
  let fixture: ComponentFixture<CollectionAvatarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionAvatarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionAvatarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
