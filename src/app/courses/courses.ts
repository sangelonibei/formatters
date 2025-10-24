import { Component, inject, OnInit } from "@angular/core";
import { CourseService } from "./data-access/course.service";


@Component({
    selector: "app-courses",
    templateUrl : "./courses.html",
    styleUrl: "./courses.scss"
})
export class CoursesComponent implements OnInit {

    courseService  = inject(CourseService);

    constructor(){}
    ngOnInit(){
    }

}