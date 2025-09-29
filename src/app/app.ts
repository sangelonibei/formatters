import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { ContactForm } from "./contact-form/contact-form";
import { StudentsReview } from "./students-review/students-review";
import { PartnersAndAccreditations } from "./partners-and-accreditations/partners-and-accreditation.component";
import { TranslateService } from '@ngx-translate/core';
import { LearningAreas } from './learning-areas/learning-areas';
import { ExploreCourses } from './explore-courses/explore-courses';
import { FeaturedCourses } from "./featured-courses/featured-courses";
import { WhyFormatters } from "./why-formatters/why-formatters";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, ContactForm, StudentsReview, PartnersAndAccreditations, LearningAreas, ExploreCourses, FeaturedCourses, WhyFormatters],
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
