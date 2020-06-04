import { Component, OnInit } from '@angular/core';
import {CHARACTERS_DATA} from './data/characters.data';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  characters = CHARACTERS_DATA.COLLECTION;
  isOpenMenu: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  openMenu(event) {
    this.isOpenMenu = event;
  }
}
