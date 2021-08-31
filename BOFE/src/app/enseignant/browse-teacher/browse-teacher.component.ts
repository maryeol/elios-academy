import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import  {Observable ,of} from 'rxjs';
import {TeacherService} from '../../services/teacher.service';
import {Teacher} from '../../Teacher';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-browse-teacher',
  templateUrl: './browse-teacher.component.html',
  styleUrls: ['./browse-teacher.component.css']
})
export class BrowseTeacherComponent implements OnInit {
  @Output() onDeleteTeacher : EventEmitter<Teacher> = new EventEmitter();
  teachers : Teacher[] = [];
  matricule : number;
  p : number =1 ;
  faTimes = faTimes;
  faEye = faEye 

  constructor(private TeacherService : TeacherService,
              private router : Router) { }

  ngOnInit(): void {
    this.TeacherService.getTeacher().subscribe((teachers)=> 
    this.teachers = teachers);
  }

  onDelete(teacher : Teacher){ 
    this.TeacherService.deleteTeacher(teacher).subscribe((
      ) => (this.teachers = this.teachers.filter(t => t.id !== teacher.id)));
      alert("enseignant supprimé");
  }

  Search(){
    if(this.matricule == null ){
      this.ngOnInit;
    }
    else {
      this.teachers = this.teachers.filter( res =>{
        return res.id==this.matricule
      });
    }
  }
  Reset(){
    this.TeacherService.getTeacher().subscribe((teachers) => this.teachers = teachers );
  }

  key ='id';
  sort(key : string ){
    this.key = key ;
  }

}
