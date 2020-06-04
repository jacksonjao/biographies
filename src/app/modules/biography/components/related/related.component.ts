import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../../../../../shared/models/character.model';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit {
  @Input() characters: CharacterModel[];
  constructor() { }

  ngOnInit() {
  }

}
