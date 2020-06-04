import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../../../../../shared/models/character.model';

@Component({
  selector: 'app-collection-avatar',
  templateUrl: './collection-avatar.component.html',
  styleUrls: ['./collection-avatar.component.scss']
})
export class CollectionAvatarComponent implements OnInit {
  @Input() character: CharacterModel
  constructor() { }

  ngOnInit() {
  }

}
