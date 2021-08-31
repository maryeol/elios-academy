import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../../services/teacher.service';
import {Teacher} from '../../Teacher';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  teacher = {
    id: 0,
    name: '',
    familyname: '',
    phonenumber : '',
    adress:'',
    birthday:'',
    gender:'',
    subject : '',
  }

  constructor(private teacherService : TeacherService,
              private route : ActivatedRoute,
              private router : Router
              ) { }

  ngOnInit(): void {
    this.getTeacherDetails(this.route.snapshot.params.id);
  }

  getTeacherDetails(id : number){
    this.teacherService.getTeacherById(id)
    .subscribe((data: any) => {
      this.teacher = data;
      console.log(this.teacher);
    });  
  }

  onUpdate(){
    this.teacherService.updateTeacher(this.teacher).subscribe(()=>{
      this.getTeacherDetails(this.teacher.id);
      alert("enseignant mis à jour avec succès");
      this.router.navigate(['home/enseignant']);}
      , (err: any) => {
        console.log(err);
        alert("Erreur !!");
        this.router.navigate(['home/enseignant']);
      }
      
    );
  }
}
