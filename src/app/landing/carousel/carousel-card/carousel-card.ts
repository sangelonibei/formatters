import { Component, input } from '@angular/core';
import { Course } from '../course-carousel';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './carousel-card.html',
  styleUrls: ['./carousel-card.scss']
})
export class CarouselCard {
  course = input.required<Course>();
  active = input.required<boolean>();

  onDiscoverMore(course: Course) {
    console.log('Discover more about:', course.title);
    // Add your navigation logic here
  }
}
