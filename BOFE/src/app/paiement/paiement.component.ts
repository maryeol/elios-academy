import { Component, OnInit } from '@angular/core';
import  {Observable ,of} from 'rxjs';
import {StudentService} from '../services/student.service';
import {Student} from '../Student';
import { SubjectService } from '../services/subject.service';
import { Subject } from '../Subject';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  student = {
    id: 0,
    name: '',
    familyname: '',
    phonenumber1 : '',
    phonenumber2 :'',
    adress:'',
    birthday:'',
    gender:'',
    statue:'',
    level:'',
    subjects:[]
  }

  subject = {
    id: 0,
    name: '',
    level: '',
    classe :'',
    teacher : '',
    price :'',
  }

  cond : boolean;
  matricule : number;
  path: string;
  checking:boolean;
 
  subjects: number[];
  subjectsDetails : Subject[] = [];
  

  constructor(private studentService: StudentService,
                private subjectService : SubjectService,
                private route: ActivatedRoute,
                private router : Router) { }

  ngOnInit(): void {
      if ( this.getStudentDetails(this.route.snapshot.params.id)==undefined ){
        this.cond=true;
      }
      else {
        this.getStudentDetails(this.route.snapshot.params.id);
      }
    }

  getStudentDetails(id: number) {
    this.studentService.getStudentById(id)
      .subscribe((data: any) => {
        this.student = data;
        /*console.log(this.student);*/
        if (this.student.id != null ){
          this.cond=false;
          this.subjects =this.student.subjects;    
        for (let i of this.subjects) {
        this.getSubjectDetails(i);
        }
        }
        else{
          alert( "aucun eleve avec cette matricule ")
        }
      });        
  }
  
  getSubjectDetails(id  : number ){
    this.subjectService.getSubjectById(id)
    .subscribe((data: any) => {
      this.subjectsDetails = data ;
      console.log(this.subjectsDetails);
    });  
  }

  Search(){
    if(this.matricule == null ){
      alert("entrez la matricule !! ");
    }
    this.getStudentDetails(this.matricule);    
  }

  back(){
    this.ngOnInit();
  }

  check(){
    this.checking=true;
  }


}
