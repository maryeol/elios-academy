import { Injectable } from '@angular/core';
import {HttpClient , HttpClientModule, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Student} from '../Student';
import { Observable  , of , throwError  } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-TYpe' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl ='http://localhost:5000/students' ;

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    getStudent() : Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl) ; 
    }
  
    getStudentById(id: number): Observable<Student> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Student>(url).pipe(
        tap(_ => console.log(`fetched cases id=${id}`)),
        catchError(this.handleError<Student>(`getCasesById id=${id}`))
      );  
    }

    addStudent(data: any): Observable<any> {
      return this.http.post(this.apiUrl, data);
    }
  

    updateStudent(data: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${data.id}`, data);
    }
   
    deleteStudent(student : Student ) : Observable<Student>{
      const url = `${this.apiUrl}/${student.id}`;
      return this.http.delete<Student>(url);
    }
  
    findByLevel(level: any): Observable<Student[]> {
      return this.http.get<Student[]>(`${this.apiUrl}?niveau=${level}`);
    }
}
