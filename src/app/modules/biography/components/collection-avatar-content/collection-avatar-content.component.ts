import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../../../../../shared/models/character.model';

@Component({
  selector: 'app-collection-avatar-content',
  templateUrl: './collection-avatar-content.component.html',
  styleUrls: ['./collection-avatar-content.component.scss']
})
export class CollectionAvatarContentComponent implements OnInit {
  @Input() character: CharacterModel;
  constructor() {
  }

  ngOnInit() {


  }

}
