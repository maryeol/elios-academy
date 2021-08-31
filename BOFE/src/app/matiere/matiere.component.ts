import { Component, OnInit ,  Output , EventEmitter } from '@angular/core';
import  {Observable ,of} from 'rxjs';
import { SubjectService } from '../services/subject.service';
import {Subject} from '../Subject';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';



@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {

  @Output() onDeleteStudent : EventEmitter<Subject> = new EventEmitter();
  subjects : Subject[] = [] ;
  faTimes = faTimes;
  faEye = faEye ; 
  id : number ;

  constructor(private subjectService : SubjectService,
              private router : Router) { }

  ngOnInit(): void {
    this.subjectService.getSubject().subscribe((subjects) => this.subjects = subjects);
  }

  onDelete(subject : Subject){ 
    this.subjectService.deleteSubject(subject).subscribe((
      ) => (this.subjects = this.subjects.filter(t => t.id !== subject.id)));
      alert("matiere supprimée");
  }

  Search(){
    if(this.id == null ){
      alert('entrer ID !! ');
    }
    else {
      this.subjects = this.subjects.filter( res =>{
        return res.id==this.id
      });
    }
  }
  Reset(){
    this.subjectService.getSubject().subscribe((subjects) => this.subjects = subjects );
  }



}
