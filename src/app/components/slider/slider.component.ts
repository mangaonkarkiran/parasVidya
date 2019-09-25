import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig],
})
export class SliderComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
   images: any = [
    '../assets/images/965x300_fill_slide1.jpg',
    '../assets/images/965x300_fill_slide2.jpg',
    '../assets/images/965x300_fill_slide3.jpg',
    '../assets/images/965x300_fill_slide4.jpg',
  ];
  ngOnInit() {
   
  }
}
