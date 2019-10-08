import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe(
    {
        name:'filterByDescription'  
    }
)

export class FilterByDescription implements PipeTransform{

    transform(photos: Photo[], descriptioQuery: string) {
        descriptioQuery = descriptioQuery.trim().toLowerCase()

        if(descriptioQuery){
            return photos.filter( photo => photo.description.toLowerCase().includes(descriptioQuery))
        }else{
            return photos
        }
    }
}