import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';

  @Output() action: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  public handleClick(e) {
    e?.stopPropagation();
    this.action.emit();
  }

}
