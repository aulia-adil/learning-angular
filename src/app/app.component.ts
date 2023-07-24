import { Component } from '@angular/core';
import {DataService} from "./data.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  data: string[][] | null= null;
  id: string | null = null;
  dataDynamicRouting: (string | any)[] = [];
  constructor(private _dataService: DataService, private _route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.data = this._dataService.getData();
    this.id = this._route.snapshot.paramMap.get('id');
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      console.log(event);
      console.log("event.url: " + event.url);
      this.id = event.url.split("/")[1];
      console.log("this.id: " + this.id);
      console.log(this.data);
      console.log(this.data ? this.data[1][1] : null);
      this.dataDynamicRouting = [this.id, this.data ? this.data[parseInt(this.id) - 1][1] : null];
    });
  }
}
