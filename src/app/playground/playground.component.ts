import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getCssString() {
    return 'font-weight-bold';
  }

  getCssStringArray() {
    return ['font-weight-bold', 'text-success'];
  }

  getCssConfigurationObject() {
    return {
      'font-weight-bold': true,
      'text-danger': true
    };
  }

  getStyleConfigurationObject() {
    return {
      'font-weight': 'bold',
      color: 'blue'
    };
  }
}
