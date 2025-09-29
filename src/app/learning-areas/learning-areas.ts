import { Component } from '@angular/core';
import { Area, AreaCardComponent } from './app-area-card/area-card';



@Component({
  selector: 'app-learning-areas',
  imports: [AreaCardComponent],
  templateUrl: './learning-areas.html',
  styleUrl: './learning-areas.scss'
})
export class LearningAreas {
areas: Area[] = [
    {
      id: "informatica",
      title: "Informatica",
      description: "Tecnologie moderne per lo sviluppo digitale e l'innovazione",
      count: 15,
      tags: ["Area Web","Sviluppo Software","Database & BI","Cloud Computing"],
      icon: { viewBox: "0 0 24 24", path: "M20,18C20.5,18 21,17.5 21,17V7C21,6.5 20.5,6 20,6H4C3.5,6 3,6.5 3,7V17C3,17.5 3.5,18 4,18H12L10.5,20H9V21H15V21H13.5L12,18H20M5,8H19V16H5V8Z" },
      link: "#"
    },
    {
      id: "salesforce",
      title: "Salesforce",
      description: "Piattaforma CRM leader mondiale per la gestione clienti e automazione vendite",
      count: 12,
      tags: ["Salesforce CRM","Marketing Cloud","Salesforce Developer"],
      icon: { viewBox: "0 0 24 24", path: "M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z" },
      link: "#"
    },
    {
      id: "exin",
      title: "Certificazioni EXIN",
      description: "Certificazioni riconosciute a livello internazionale per professionisti IT",
      count: 9,
      tags: ["Agile, DevOps and Lean","Data Protection and Security","Technologies and Software"],
      icon: { viewBox: "0 0 24 24", path: "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" },
      link: "#"
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      description: "Competenze trasversali per il successo professionale e personale",
      count: 6,
      tags: ["Competenze Trasversali","Business English"],
      icon: { viewBox: "0 0 24 24", path: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" },
      link: "#"
    },
    {
      id: "compliance",
      title: "Compliance Aziendale",
      description: "Normative e procedure per la conformità aziendale",
      count: 8,
      tags: ["Sicurezza, Salute e Privacy"],
      icon: { viewBox: "0 0 24 24", path: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" },
      link: "#"
    },
    {
      id: "amministrazione",
      title: "Amministrazione e Contabilità",
      description: "Gestione amministrativa e contabile per aziende e professionisti",
      count: 14,
      tags: [],
      icon: { viewBox: "0 0 24 24", path: "M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" },
      link: "#"
    },
    {
      id: "formazione-obbligatoria",
      title: "Formazione Obbligatoria",
      description: "Corsi di formazione richiesti dalla normativa vigente",
      count: 7,
      tags: [],
      icon: { viewBox: "0 0 24 24", path: "M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M14,6V4H10V6H14M4,8V19H20V8H4Z" },
      link: "#"
    },
    {
      id: "apprendistato",
      title: "Apprendistato",
      description: "Percorsi formativi per l'inserimento e lo sviluppo degli apprendisti",
      count: 4,
      tags: [],
      icon: { viewBox: "0 0 24 24", path: "M20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H6L4,22H6.2L7.2,18H16.8L17.8,22H20L18,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H4V4H20V16M8,15H10V17H8V15M14,15H16V17H14V15M11,8A2,2 0 0,1 9,10A2,2 0 0,1 7,8H11M17,8A2,2 0 0,1 15,10A2,2 0 0,1 13,8H17Z" },
      link: "#"
    }
  ];
}
