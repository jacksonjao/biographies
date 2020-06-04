import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiographyComponent } from './biography.component';
import { BiographyDetailComponent } from './pages/biography-detail/biography-detail.component';
import {BIOGRAPHY_ROUTING} from './biography.routes';
import { BiographiesComponent } from './components/biographies/biographies.component';
import { BiographiesItemComponent } from './components/biographies-item/biographies-item.component';
import { CharacterViewerComponent } from './components/character-viewer/character-viewer.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';



@NgModule({
  declarations: [BiographyComponent, BiographyDetailComponent, BiographiesComponent, BiographiesItemComponent, BiographiesComponent, BiographiesItemComponent, CharacterViewerComponent, BasicInfoComponent],
  imports: [
    CommonModule,
    BIOGRAPHY_ROUTING
  ]
})
export class BiographyModule { }
