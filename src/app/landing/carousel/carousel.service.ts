import { BehaviorSubject } from "rxjs";
import { Course } from "./course-carousel";
import { Injectable } from "@angular/core";

export const CARDS: Course[] = [
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
  ]




@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private cards = CARDS;
  private currentSlideIndex = 0;
  private autoAdvanceTimer?: ReturnType<typeof setTimeout>;
  private slideTimes = [4000, 5000, 6000];

  public currentSlide$ = new BehaviorSubject<Course>(this.cards[0]);
  public currentIndex$ = new BehaviorSubject<number>(0);

  getCards() {
    return this.cards;
  }

  startAutoPlay() {
    this.clearTimer();
    const duration = this.slideTimes[this.currentSlideIndex % this.slideTimes.length];
    this.autoAdvanceTimer = setTimeout(() => {
      this.nextSlide();
      this.startAutoPlay();
    }, duration);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.cards.length;
    this.updateSlide();
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
    this.updateSlide();
    this.startAutoPlay();
  }

  private updateSlide() {
    this.currentSlide$.next(this.cards[this.currentSlideIndex]);
    this.currentIndex$.next(this.currentSlideIndex);
  }

  clearTimer() {
    if (this.autoAdvanceTimer) clearTimeout(this.autoAdvanceTimer);
  }
}
