import {Observable} from "rxjs/index";
import {takeUntil, map, switchMap, debounceTime} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

import {LocalStorageService} from "ngx-webstorage";

import {FilmModel} from "../models/film.model";
import {BaseComponent} from "../classes/base.component";
import {FilmsService} from "../films.service";

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html',
    styleUrls: ['./films.component.scss']
})
export class FilmsComponent extends BaseComponent implements OnInit {

    form: FormGroup;

    films$: Observable<FilmModel>;

    storageFilms: FilmModel[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private filmsService: FilmsService,
        private localStorageService: LocalStorageService,
        private router: Router,
    ) {
        super();
        this.initForm();
    }

    ngOnInit() {

        this.films$ = this.form.get("search")
            .valueChanges
            .pipe(
                takeUntil(this.destroy$),
                debounceTime(300),
                switchMap(query => this.filmsService.search(query)),
                map(response => response.Search),
            );

        this.loadFilms();
    }

    openClick(film: FilmModel, event: Event) {
        this.router.navigate(["films", film.imdbID]);
    }

    searchOptionSelected(event: MatAutocompleteSelectedEvent) {
        this.storageFilms.unshift(event.option.value);
        this.form.reset({emitEvent: false});
        this.saveFilms();
    }

    displayFn(film: FilmModel): string | null {
        return film ? film.Title : null;
    }

    deleteClick(index: number, event: Event) {
        this.storageFilms.splice(index, 1);
        this.storageFilms = this.storageFilms.slice();
        this.saveFilms();
    }

    loadFilms() {
        try {
            const films = JSON.parse(this.localStorageService.retrieve("films"));
            this.storageFilms = Array.isArray(films) ? films : [];
        } catch (e) {
            this.storageFilms = [];
        }
    }

    saveFilms() {
        this.localStorageService.store("films", JSON.stringify(this.storageFilms));
    }

    initForm() {
        this.form = this.formBuilder.group({
            search: new FormControl(null),
        });
    }

}
