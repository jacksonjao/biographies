import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../../../../../shared/models/character.model';

@Component({
  selector: 'app-biographies',
  templateUrl: './biographies.component.html',
  styleUrls: ['./biographies.component.scss']
})
export class BiographiesComponent implements OnInit {
  @Input() characters: CharacterModel[];
  constructor() {
  }

  ngOnInit() {
  }

}
