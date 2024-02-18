import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.css'
})
export class DefaultButtonComponent implements OnInit {
  @Input()
  type: "button" | "submit" = "submit";
  @Input()
  text: string = 'Submit';
  @Input()
  bgColor = 'red';
  @Input()
  color = 'white';
  @Input()
  fontSizeRem = 1.3;
  @Input()
  widthRem = 12;
  @Output()
  OnClick = new EventEmitter;
  constructor() {}
  ngOnInit(): void {
    
  }
}
