import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../Student';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../Subject';
import { Router } from '@angular/router';
import {Subscription , of } from 'rxjs';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  matricule: number = 0;
  nom: string = "";
  prenom: string = "";
  numparent: string = "";
  numeleve: string = "";
  adresse: string = "";
  datenaiss: string = "";
  sexe: string = "";
  statue: string = "";
  niveau: string = "";

  
  subjectsData : Subject[];
  selectedItems : number[];
  id : number ;


  selectChangeHandler(event: any) {
    this.niveau = event.target.value;
  }

  student: Student = {
    id: 0,
    name: '',
    familyname: '',
    phonenumber1: '',
    phonenumberP: '',
    adress: '',
    Date: '',
    gender: '',
    statue: '',
    level: '',
    picture : null,
  };



  constructor(private studentService: StudentService, private router: Router,
              private subjectService : SubjectService,
             ) {}
  
  ngOnInit(): void {
    this.subjectService.getSubject().subscribe((subjects) => this.subjectsData = subjects );
    this.selectedItems =  new Array<number>();
  }


  getSubjectId(e : any , id : number){
    if ( e.target.checked)
    {
      console.log(id + 'checked')
      this.selectedItems.push(id)
    }
    else{
      console.log(id + 'unchecked')
      this.selectedItems = this.selectedItems.filter ( m => m!=id );
    }
    console.log(this.selectedItems)
  }

  saveStudent(): void {
    const data = {
      id: this.matricule,
      name: this.nom,
      familyname: this.prenom,
      phonenumber1: this.numparent,
      phonenumberP: this.numeleve,
      adress: this.adresse,
      Date: this.datenaiss,
      gender: this.sexe,
      statue: this.statue,
      level: this.niveau,
      picture : null,
      subjects : this.selectedItems 
    };

    

    this.studentService.addStudent(data)
      .subscribe(
        response => {
          console.log(response);
          alert("étudiant ajouté avec succès ")
          this.router.navigateByUrl('/home/etudiant')
        },
        error => {
          console.log(error);
          alert("Erreur !! ");
        });
  }
  }


