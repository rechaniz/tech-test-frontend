import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {Movement} from "./data/movement";
import {environment} from "../environments/environment";

@Injectable()
export class MovementsService {
  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Movement[]> {
    return this.httpClient.get<Movement[]>(environment.apiUrl+'/movements')
  }

  sendNewMovement(movement: Movement): Observable<any> {
    return this.httpClient.post(environment.apiUrl+'/movements', movement, {observe: 'response'})
        .pipe(map(res => res), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error)
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error.message));
  }
}
