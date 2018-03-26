import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {

  model = {slide: 100, satisfaction: "happy"};

  constructor() { }

  ngOnInit() {

  }


}
