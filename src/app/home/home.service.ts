
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../shared-services/interceptor/url-services/url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  APIKEY = 'AIzaSyCJpXGrr_BsvCG0lSOqlAt0SNBJ7pT71gA';

  constructor(private readonly url: UrlService, private readonly http: HttpClient) { }


  signInWithGoogle(token) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${this.APIKEY}`,
    {
      postBody:`id_token=${token}&providerId=google.com`,
    requestUri:'http://localhost:4200/',
    returnIdpCredential:true,
    returnSecureToken:true
  })
  }
}