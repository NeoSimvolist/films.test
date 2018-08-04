import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {FilmModel} from "./models/film.model";

export class FilmResponse {
    Search: FilmModel[];
    totalResults: string;
    Response: string;
}

@Injectable()
export class FilmsService implements Resolve<FilmModel> {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    one(imdbID: string): Observable<FilmModel> {
        return this.httpClient.get<FilmModel>(`https://www.omdbapi.com?apikey=672a52f6&plot=full&i=${imdbID}`);
    }

    search(query: string): Observable<FilmResponse> {
        return this.httpClient.get<FilmResponse>(`https://www.omdbapi.com?apikey=672a52f6&s=${query}`);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FilmModel> {
        return this.one(route.params.id);
    }
}
