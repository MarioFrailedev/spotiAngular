import { Component,  } from '@angular/core';
import { SportifyService } from 'src/app/services/sportify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SportifyService) { }

  search(temp: string) {
    this.loading = true;

    this.spotify.getArtist( temp ).subscribe( (data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }

}
