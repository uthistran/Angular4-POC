import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class HTTPService {
  constructor(
    private http: Http
  ) { }
  // Calling the Hackernews API using GET method.
  setdbData() {
    // return this.http.get(`https://hn.algolia.com/api/v1/search_by_date?query=node&tags=story`)
    // .map((res:Response) => res.json());


    var data = JSON.stringify({
      server: (document.getElementById("reg_server") as HTMLInputElement).value,
      database: (document.getElementById("reg_database")as HTMLInputElement).value,
      username: (document.getElementById("reg_username")as HTMLInputElement).value,
      password: (document.getElementById("reg_password")as HTMLInputElement).value
    })

  //  var data = [{
  //     "id": 1,
  //     "name" : "foo"
  // },
  //     {
  //       "id": 2,
  //       "name" : "foody"
  // }]

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    // var options: RequestOptions = new RequestOptions({ headers: headers });
    // options.body = data;
    return this.http
      .post('http://10.2.46.84:3999/api/setdbdata/', data, {headers: headers})
      .map(response => response.json());

  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../css/styles.css']
})
export class AppComponent {
  title = 'Connect to a WCM database';

  success = {};
  constructor(private httpService: HTTPService) {
     //this.HackerNewsService.setdbData().subscribe(data => this.success = data);
  }

  submit = function () {
    // alert('clicked');
    this.httpService.setdbData().subscribe(data => this.success = data);
    // var data = JSON.stringify({
    //   server: document.getElementById("reg_server"),
    //   database: document.getElementById("reg_database"),
    //   username: document.getElementById("reg_username"),
    //   password: document.getElementById("reg_password")
    // })

    // var headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    // this.http
    //   .post('http://10.2.46.84:3999/api/setdbdata/', data, { headers: headers })
    //   .map(response => response.json());

    // var t = this.http.post("http://10.2.46.84:3999/api/setdbdata/", data).success(function (data, status) {
    //   console.log('Data posted successfully');
    // })
  }
}
