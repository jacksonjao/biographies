import {Component, Input, OnInit} from '@angular/core';
import {CharacterModel} from '../../../../../shared/models/character.model';

@Component({
  selector: 'app-complete-info',
  templateUrl: './complete-info.component.html',
  styleUrls: ['./complete-info.component.scss']
})
export class CompleteInfoComponent implements OnInit {
  @Input() character: CharacterModel;
  constructor() { }

  ngOnInit() {
  }

}
