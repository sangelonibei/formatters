import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../featured-courses';





@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './course-card.scss',
  templateUrl: './course-card.html'
})
export class CourseCard {
  course = input.required<Course>();
}