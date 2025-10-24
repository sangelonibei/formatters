// course-carousel.component.ts
import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Course {
  id: number;
  badge: string;
  title: string;
  description: string;
  duration: string;
  startDate: string;
  cardClass: string;
}

@Component({
  selector: 'app-course-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./course-carousel.html',
  styleUrl: './course-carousel.scss'
})
export class CourseCarousel implements OnInit, OnDestroy {
  currentSlide = signal(0);
  autoPlayInterval: any;
  mobileMenuOpen = signal(false);

  navItems = [
    { id: 1, href: '#home', label: 'Home' },
    { id: 2, href: '#catalogo', label: 'Catalogo corsi' },
    { id: 3, href: '#formazione', label: 'Formazione aziendale' },
    { id: 4, href: '#chi-siamo', label: 'Chi siamo' },
    {id: 5, href:'#news', label: "News"}
  ];

  courses = signal<Course[]>([
    {
      id: 1,
      badge: 'Informatica',
      title: 'Mulesoft',
      description: 'creazione di soluzioni di integrazione basate su API e gestione dati',
      duration: '45h',
      startDate: '20/09/2025',
      cardClass: 'card-1'
    },
    {
      id: 2,
      badge: 'Salesforce',
      title: 'Salesforce CRM',
      description: 'gestione completa delle relazioni con i clienti attraverso la piattaforma Salesforce',
      duration: '60h',
      startDate: '25/09/2025',
      cardClass: 'card-2'
    },
    {
      id: 3,
      badge: 'Certificazione Exin',
      title: 'Infrastructure as Code',
      description: 'gestione automatizzata dell\'infrastruttura attraverso codice per deployment efficienti',
      duration: '40h',
      startDate: '01/10/2025',
      cardClass: 'card-3'
    }
  ]);

  totalSlides = computed(() => this.courses().length);

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    this.resetAutoPlay();
  }

  nextSlide() {
    const next = (this.currentSlide() + 1) % this.totalSlides();
    this.currentSlide.set(next);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  onDiscoverMore(course: Course) {
    console.log('Discover more about:', course.title);
    // Add your navigation logic here
  }
}