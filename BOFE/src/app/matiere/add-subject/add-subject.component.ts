import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import {Subject} from '../../Subject';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  id: number = 0;
  nom:string ="";
  niveau : string ="";
  classe : string ="";
  prof : string="";
  prix : string="";
 
  subject : Subject = {
    id: 0,
    name: '',
    level: '',
    classe :'',
    teacher : '',
    price :'',
  }

  constructor(private subjectService: SubjectService,
              private router : Router) { }

  ngOnInit(): void {
  }

  saveSubject (){
    const data = {
      id: this.id,
      name: this.nom,
      level:this.niveau,
      classe:this.classe,
      teacher:this.prof,
      price:this.prix,
    };


    this.subjectService.addSubject(data)
      .subscribe(
        response => {
          console.log(response);
          alert("matiere ajouté avec succès ")
          this.router.navigateByUrl('/home/matiere')
        },
        error => {
          console.log(error);
          alert("Erreur !! ");
        });
  }

}
