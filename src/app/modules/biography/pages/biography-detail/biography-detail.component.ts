import { Component, OnInit } from '@angular/core';
import {CHARACTERS_DATA} from '../../data/characters.data';
import {ActivatedRoute} from '@angular/router';
import {CharacterModel} from '../../../../../shared/models/character.model';

@Component({
  selector: 'app-biography-detail',
  templateUrl: './biography-detail.component.html',
  styleUrls: ['./biography-detail.component.scss']
})
export class BiographyDetailComponent implements OnInit {
  character: CharacterModel;
  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(param => {
      this.character = CHARACTERS_DATA.COLLECTION[param.id];
    });

  }

  ngOnInit() {
  }

}
