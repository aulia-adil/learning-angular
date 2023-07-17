import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import ResponseHeader from 'src/api/service/responseHeader';
import { StatusCode } from 'src/api/service/statusCode';
import Anything from 'src/api/service/anything';


@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  ngOnInit() {
    console.log(Anything.testAnything('test'));
    this.http.get(Anything.testAnything('testHaha')).subscribe(response => {
      console.log(response);
    })
  };
}
