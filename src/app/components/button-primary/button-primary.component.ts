import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() label = '';
  @Input() variation = '';

  constructor() { }

  ngOnInit(): void {
  }

}
