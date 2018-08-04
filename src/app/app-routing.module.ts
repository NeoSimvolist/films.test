import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {FilmsService} from "./films.service";
import {FilmsComponent} from "./films/films.component";
import {FilmsFormComponent} from "./films-form/films-form.component";

const routes: Routes = [
    {
        path: "films",
        component: FilmsComponent,
    },
    {
        path: "films/:id",
        component: FilmsFormComponent,
        resolve: {
            film: FilmsService,
        }
    },
    {
        path: "",
        redirectTo: "films",
        pathMatch: "full",
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}
