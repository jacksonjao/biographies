import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss']
})
export class CloseButtonComponent implements OnInit {
  isOpen: boolean;
  @Output() action = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.action.emit(this.isOpen);
  }

}

