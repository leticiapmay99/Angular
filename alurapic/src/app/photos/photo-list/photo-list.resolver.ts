import { PhotoService } from "../photo/photo.service";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "../photo/photo";
import { resolve } from "q";

@Injectable({
    providedIn:'root'
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
    constructor(private service: PhotoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const usarName = route.params.usarName
        return this.service.listFromUser(usarName)
                
    }
}