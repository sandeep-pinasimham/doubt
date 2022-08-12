import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private _httpClient: HttpClient) {}

  getAllRequests = (): Observable<any[]> => {
    const url = 'http://localhost:9092/requests';
    return this._httpClient.get<any[]>(url);
  };
}
