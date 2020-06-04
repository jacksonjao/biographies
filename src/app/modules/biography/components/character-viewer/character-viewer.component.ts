import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../../../../../shared/models/character.model';

@Component({
  selector: 'app-character-viewer',
  templateUrl: './character-viewer.component.html',
  styleUrls: ['./character-viewer.component.scss'],
})
export class CharacterViewerComponent implements OnInit {
  constructor() {
  }
  @Input() character: CharacterModel;
  ngOnInit() {

  }

}
