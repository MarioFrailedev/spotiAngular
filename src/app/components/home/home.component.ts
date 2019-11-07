import { Component, OnInit } from '@angular/core';
import { SportifyService } from '../../services/sportify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;

  error: boolean;
  mError: string;

  constructor( private spotify: SportifyService ) {
    this.error = false;
    this.loading = true;
    this.spotify.getNewRelease().subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
    },(errorType ) => {
      this.loading = false;
          this.error = true;
          console.log(errorType);
          this.mError = errorType.error.error.message;
    });
   }

  ngOnInit() {
  }

}
