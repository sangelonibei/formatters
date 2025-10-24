import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Area {
    id: string;
    title: string;
    description: string;
    count: number;
    tags?: string[];
    icon: { viewBox: string; path: string };
    link: string;
}

@Component({
    selector: 'app-area-card',
    standalone: true,
    imports: [CommonModule],
    template: `
  <article class="course-card" [attr.id]="area().id" role="article" aria-label="{{area().title}}">
            <div class="course-header">
                <div class="course-icon" aria-hidden="true">
                    <svg [attr.viewBox]="area().icon.viewBox" fill="currentColor" focusable="false"
                        xmlns="http://www.w3.org/2000/svg">
                        <path [attr.d]="area().icon.path"></path>
                    </svg>
                </div>
                <h3 class="course-title">{{ area().title }}</h3>
            </div>

            <p class="course-description">{{ area().description }}</p>

            <div class="course-count">{{ area().count }} corsi disponibili</div>

            @if (area().tags?.length) {
            <div class="course-tags">
                @for (tag of area().tags; track $index) {
                <a href="#" class="tag">{{ tag }}</a>
                }
            </div>

            }
            <a class="explore-btn" [href]="area().link" aria-label="Esplora {{ area().title }}">Esplora area</a>
        </article>
  `,
    styleUrls: ['./area-card.scss']
})
export class AreaCardComponent {

    area = input.required<Area>();

}
