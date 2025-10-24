import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-course-search',
  imports: [FormsModule, FaIconComponent],
  templateUrl: './course-search.html',
  styleUrl: './course-search.scss'
})
export class CourseSearch {
  searchIcon = faMagnifyingGlass;
searchTerm: string = '';
  popularCourses = ['JavaScript', 'Python', 'Web Design', 'React', 'Data Science', 'Marketing'];

  onSearch() {
    console.log('Ricerca avviata per:', this.searchTerm);
    // Qui puoi chiamare un servizio per filtrare i corsi
  }
}
