import {Subject} from "rxjs/index";
import {OnDestroy} from "@angular/core";

export class BaseComponent implements OnDestroy {

    protected destroy$ = new Subject<void>();

    ngOnDestroy() {
        this.unsubscribeAll();
    }

    unsubscribeAll() {
        this.destroy$.next();
    }
}
