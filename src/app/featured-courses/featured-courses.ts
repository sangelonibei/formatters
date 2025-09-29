import { Component } from '@angular/core';
import { CourseCard } from "./course-card/course-card";

export interface Course {
  title: string;
  description: string;
  image: string;
  tag: string;
  category: string; // tutte le categorie separate da virgola
  date: string;
}

export const COURSES: Course[] = [
  {
    title: "Backend",
    description: "Sviluppo di soluzioni server-side robuste, scalabili e performanti per applicazioni moderne",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400",
    tag: "AREA WEB",
    category: "Informatica, Qualifica Regione Lazio",
    date: "15/10/2025"
  },
  {
    title: "Infrastructure as Code",
    description: "Gestione automatizzata dell'infrastruttura attraverso codice per deployment efficienti",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400",
    tag: "AGILE, DEVOPS AND LEAN",
    category: "Certificazioni EXIN",
    date: "22/10/2025"
  },
  {
    title: "Frontend e Sviluppo Mobile",
    description: "Creazione di interfacce utente moderne e applicazioni mobile cross-platform",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400",
    tag: "SVILUPPO SOFTWARE",
    category: "Informatica",
    date: "29/10/2025"
  },
  {
    title: "Salesforce CRM",
    description: "Padronanza della piattaforma CRM leader mondiale per la gestione clienti",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    tag: "Salesforce",
    category: "Salesforce, Qualifica Regione Abruzzo",
    date: "05/11/2025"
  }
];

@Component({
  selector: 'app-featured-courses',
  imports: [CourseCard],
  templateUrl: './featured-courses.html',
  styleUrl: './featured-courses.scss'
})
export class FeaturedCourses {

  courses = COURSES;

}
