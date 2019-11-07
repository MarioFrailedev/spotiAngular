import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportifyService {

  constructor(private http: HttpClient, ) {
    console.log('spotify Service listo');
   }

   getQuery( query: string) {
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization': "Bearer BQCIeQUgMtgKdCNi7uoCnIpdMMouIi5N31_0Xmx_VydsYbWN7sYlpNUAQaS6t2QSZQnhyj7IOpekmpUhYE8",

    });
    return this.http.get(url,{ headers}); 
   }

   getNewRelease(){

     return this.getQuery('browse/new-releases?limit=20')
                     // tslint:disable-next-line: no-string-literal
                     .pipe( map( data =>  data['albums'].items));
   }

   getArtist( temp: string ) {

    return this.getQuery(`search?q=${ temp }&type=artist&limit=10&offset=10`)
                  .pipe( map( data => data['artists'].items));


   }

   getArtistDeatil( id: string ){

    return this.getQuery(`artists/${ id }`);
    //.pipe( map( data => data['artists'].items));
   }

   getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));

  }


   
}
