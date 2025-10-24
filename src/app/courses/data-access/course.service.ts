import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { CourseDTO } from "../../interfaces/course.dto";
import { environment } from "../../../environments/environment";


@Injectable({ providedIn: "root" })
export class CourseService {

    private apiUrl = environment.apiUrl

    state = signal<{ courses: Array<CourseDTO>, loaded: boolean }>({
        courses: [],
        loaded: false
    })

    private http = inject(HttpClient);
    private coursesPerPage = 20;

    courses$ = this.http.get<Array<CourseDTO>>(`${this.apiUrl}/lista-corsi`);

    courseList = computed(() => this.state().courses);
    loaded = computed(() => this.state().loaded);

    constructor() {

        this.courses$
            .pipe(takeUntilDestroyed())
            .subscribe((courses) =>
                this.state.update(state => ({ ...state, courses: courses, loaded: true })))
    }

}