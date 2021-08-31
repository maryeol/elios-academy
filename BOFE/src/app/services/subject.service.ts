import { Injectable } from '@angular/core';
import {HttpClient , HttpClientModule, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Subject} from '../Subject';
import { Observable  , of , throwError  } from 'rxjs';



const httpOptions = {
  headers : new HttpHeaders({
    'Content-TYpe' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl ='http://localhost:5000/subjects' ;

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getSubject() : Observable<Subject[]> {
    return this.http.get<Subject[]>(this.apiUrl) ; 
    }
  
    getSubjectById(id: number): Observable<Subject> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Subject>(url).pipe(
        tap(_ => console.log(`fetched cases id=${id}`)),
        catchError(this.handleError<Subject>(`getCasesById id=${id}`))
      );  
    }

  

    addSubject(data: any): Observable<any> {
      return this.http.post(this.apiUrl, data);
    }
  

    updateSubject(data: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${data.id}`, data);
    }
   
    deleteSubject(subject : Subject ) : Observable<Subject>{
      const url = `${this.apiUrl}/${subject.id}`;
      return this.http.delete<Subject>(url);
    }

    findById(id : number ): Observable<Subject[]> {
      return this.http.get<Subject[]>(`${this.apiUrl}?id=${id}`);
    }
}
