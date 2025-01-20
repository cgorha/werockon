import { Component, OnDestroy, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit, OnDestroy{
  images: string[] = [
    'assets/slide1.jpg',
    'assets/slide2.jpg',
    'assets/slide3.jpg',
  ];

  products = [
    {
      title: 'Sacred Stone A',
      description: 'Short description for stone A...',
      image: 'assets/slide1.jpg'
    },
    {
      title: 'Sacred Stone B',
      description: 'Short description for stone B...',
      image: 'assets/slide2.jpg'
    },
    {
      title: 'Sacred Stone C',
      description: 'Short description for stone C...',
      image: 'assets/slide3.jpg'
    },
  ];

  currentIndex = 0;
  slideInterval: any;

  readonly SLIDE_DURATION = 5000;

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.stopSlideshow();
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.SLIDE_DURATION);
  }

  stopSlideshow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
