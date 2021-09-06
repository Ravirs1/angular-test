import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlService } from '../shared-services/interceptor/url-services/url.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private readonly url: UrlService, private readonly http: HttpClient) { }

  getPostDetails(): Observable<any> {
    return this.http.get<any>(this.url.GET_POST_DETAILS);
  }

  addData(data) : Observable<any> {
    return this.http.post<any>(this.url.POST_DATA, data)
  }
}