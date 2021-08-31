import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../../services/teacher.service';
import {Teacher} from '../../Teacher';

import { Router } from '@angular/router';
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  matricule: number = 0;
  nom:string ="";
  prenom : string ="";
  numerotelephone : string ="";
  adresse : string="";
  datenaiss : string="";
  sexe : string="";
  matiere : string ="";

  selectChangeHandler (event: any) {
    this.matiere = event.target.value;
  }

  student: Teacher = {
    id: 0,
    name: '',
    familyname: '',
    phonenumber : '',
    adress:'',
    birthday:'',
    gender:'',
    subject :''
  };

  constructor( private teacherService : TeacherService,
               private router : Router) { }

  ngOnInit(): void {}
  saveTeacher (){
    const data = {
      id: this.matricule,
      name: this.nom, 
      familyname: this.prenom,
      phonenumber:this.numerotelephone,
      adress:this.adresse,
      birthday:this.datenaiss,
      gender:this.sexe,
      subject:this.matiere,
    };


    this.teacherService.addTeacher(data)
      .subscribe(
        response => {
          console.log(response);
          alert("enseignant ajouté avec succès ")
          this.router.navigateByUrl('/home/enseignant')
        },
        error => {
          console.log(error);
          alert("Erreur !! ");
        });
  }

}
