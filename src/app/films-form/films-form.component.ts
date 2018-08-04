import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {FilmModel} from "../models/film.model";

@Component({
    selector: 'app-films-form',
    templateUrl: './films-form.component.html',
    styleUrls: ['./films-form.component.scss']
})
export class FilmsFormComponent implements OnInit {

    film: FilmModel;

    constructor(
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.film = this.route.snapshot.data.film;
    }

}
