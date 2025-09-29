import { Component, input, TemplateRef } from "@angular/core";

@Component({
    selector :'app-partner-badge',
    templateUrl: './partner-badge.html',
    styleUrl: './partner-badge.scss'
})
export class PartnerBadge {

    imageSrc = input.required<string>();
    title = input.required<string>();
    description = input.required<string>();

}