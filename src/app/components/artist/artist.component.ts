import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportifyService } from '../../services/sportify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {

  artist: any = {};
  topTracks; any = {};
  loading: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SportifyService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtistDetail( params['id']);
      this.getTopTracks( params[ 'id']);
    });
   }

   getArtistDetail( id:string ){
      

      this.spotify.getArtistDeatil( id )
          .subscribe( data => {
            console.log( data );
            this.artist = data;
            this.loading = false;
          });
   }

   getTopTracks( id: string) {

    this.spotify.getTopTracks( id )
                .subscribe( data => {
                  this.topTracks = data;
                  console.log( this.topTracks );
                });
   }

  

}
