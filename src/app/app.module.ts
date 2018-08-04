import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {Ng2Webstorage} from "ngx-webstorage";

import {FilmsService} from './films.service';

import {AppComponent} from './app.component';
import {FilmsComponent} from './films/films.component';
import {FilmsFormComponent} from './films-form/films-form.component';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        FilmsComponent,
        FilmsFormComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        Ng2Webstorage,

        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatProgressSpinnerModule,

        AppRoutingModule,
    ],
    providers: [
        FilmsService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
