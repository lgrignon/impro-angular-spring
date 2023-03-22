import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImproService {

  constructor(
    private readonly http: HttpClient
  ) { 
  }

  getImproText(): Observable<string> {
    return this.http.get('http://localhost:8080/impro', {
      responseType: 'text'
    });
  }

}
