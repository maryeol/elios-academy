import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import  {Observable ,of} from 'rxjs';
import {StudentService} from '../../services/student.service';
import {Student} from '../../Student';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-user',
  templateUrl: './browse-user.component.html',
  styleUrls: ['./browse-user.component.css']
})
export class BrowseUserComponent implements OnInit {
  @Output() onDeleteStudent : EventEmitter<Student> = new EventEmitter();
  students : Student[] = [] ;
  matricule : number;
  p : number =1 ;
  faTimes = faTimes;
  faEye = faEye ;  
  
  constructor(private studentService : StudentService , 
              private router: Router) { }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe((students) => this.students = students );
  }

  onDelete(student : Student){ 
    this.studentService.deleteStudent(student).subscribe((
      ) => (this.students = this.students.filter(t => t.id !== student.id)));
      alert("étudiant supprimé");
  }

  Search(){
    if(this.matricule == null ){
      alert('aucun eleve !! ');
    }
    else {
      this.students = this.students.filter( res =>{
        return res.id==this.matricule
      });
    }
  }
  Reset(){
    this.studentService.getStudent().subscribe((students) => this.students = students );
  }

  key ='id';
  sort(key : string ){
    this.key = key ;
  }


  SearchLycee(level : String ){
    this.studentService.findByLevel(level).subscribe((
      ) => (this.students = this.students.filter(t => t.level == level)));
  }
  SearchCollege(level : String ){
    this.studentService.findByLevel(level).subscribe((
      ) => (this.students = this.students.filter(t => t.level == level)));
  }
  SearchPrimaire(level : String ){
    this.studentService.findByLevel(level).subscribe((
      ) => (this.students = this.students.filter(t => t.level == level)));
  }
}
