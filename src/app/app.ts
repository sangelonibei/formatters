import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService } from '@ngx-translate/core';
import { CourseCarousel } from "./landing/carousel/course-carousel";
import { ContactForm } from "./landing/contact-form/contact-form";
import { CourseSearch } from "./landing/course-search/course-search";
import { ExploreCourses } from './landing/explore-courses/explore-courses';
import { FeaturedCourses } from "./landing/featured-courses/featured-courses";
import { Footer } from "./landing/footer/footer";
import { LearningAreas } from './landing/learning-areas/learning-areas';
import { PartnersAndAccreditations } from "./landing/partners-and-accreditations/partners-and-accreditation.component";
import { StudentsReview } from "./landing/students-review/students-review";
import { WhyFormatters } from "./landing/why-formatters/why-formatters";

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, RouterOutlet, Footer, ContactForm, StudentsReview, PartnersAndAccreditations, LearningAreas, ExploreCourses, FeaturedCourses, WhyFormatters, CourseSearch, CourseCarousel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'formatters';
  private translate = inject(TranslateService);

  constructor() {
   this.translate.addLangs(['it', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('it');
  }
}
