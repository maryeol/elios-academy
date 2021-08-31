import { Injectable } from '@angular/core';
import {HttpClient , HttpClientModule, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Teacher} from '../Teacher' ;
import { Observable  , of , throwError  } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-TYpe' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl ='http://localhost:5000/teachers' ;
  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTeacher() : Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  getTeacherById ( id : number) : Observable<Teacher>{
    const url = `${this.apiUrl}/${id}`;
      return this.http.get<Teacher>(url).pipe(
        tap(_ => console.log(`fetched cases id=${id}`)),
        catchError(this.handleError<Teacher>(`getCasesById id=${id}`))
      ); 
  }
  addTeacher(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateTeacher(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${data.id}`, data);
  }
 
   deleteTeacher (teacher : Teacher ) : Observable<Teacher>{
    const url = `${this.apiUrl}/${teacher.id}`;
    return this.http.delete<Teacher>(url);
  }


}
