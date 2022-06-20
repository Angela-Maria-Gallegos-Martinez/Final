import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoadingService{
    private Loading = new BehaviorSubject<boolean>(false);
    public readonly isLoading$ = this.Loading.asObservable();

    constructor(){}

    showLoader():void{
        this.Loading.next(true);
    }

    hideLoader():void{
        this.Loading.next(false);
    }
}