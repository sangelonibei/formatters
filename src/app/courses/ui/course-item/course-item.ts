import { Component, input } from "@angular/core";
import { CourseDTO } from "../../../interfaces/course.dto";


@Component({
    selector: 'app-course-item',
    template: `
    <article>
        <header>
            
        </header>
    </article>
    `,
    styles: []
})
export class CourseItemComponent {
    course = input.required<CourseDTO>();
}