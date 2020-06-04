import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiographyComponent } from './biography.component';
import { BiographyDetailComponent } from './pages/biography-detail/biography-detail.component';
import {BIOGRAPHY_ROUTING} from './biography.routes';
import { BiographiesComponent } from './components/biographies/biographies.component';
import { CharacterViewerComponent } from './components/character-viewer/character-viewer.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { CompleteInfoComponent } from './components/complete-info/complete-info.component';
import { RelatedComponent } from './components/related/related.component';
import { CollectionAvatarComponent } from './components/collection-avatar/collection-avatar.component';
import {CollectionAvatarContentComponent} from './components/collection-avatar-content/collection-avatar-content.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';



@NgModule({
  declarations: [BiographyComponent, BiographyDetailComponent, BiographiesComponent, CollectionAvatarContentComponent, BiographiesComponent, CollectionAvatarContentComponent, CharacterViewerComponent, BasicInfoComponent, CompleteInfoComponent, RelatedComponent, CollectionAvatarComponent, CloseButtonComponent],
  imports: [
    CommonModule,
    BIOGRAPHY_ROUTING
  ]
})
export class BiographyModule { }
