import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Api<T> {
  constructor(private http: HttpClient, private baseUrl: string) {}

  private buildOptions(query?: any, headers?: HttpHeaders) {
    const params = new HttpParams({ fromObject: query || {} });
    return { params, headers };
  }

  get(id: string, query?: any, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(
      `${this.baseUrl}/${id}`,
      this.buildOptions(query, headers)
    );
  }

  getAll(query?: any, headers?: HttpHeaders): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl, this.buildOptions(query, headers));
  }

  post(data: T, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(this.baseUrl, data, { headers });
  }

  update(id: string, data: T, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, data, { headers });
  }

  delete(id: string, headers?: HttpHeaders): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers });
  }
}
