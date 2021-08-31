import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../services/student.service';
import {Student} from '../../Student';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student = {
    id: 0,
    name: '',
    familyname: '',
    phonenumber1 : '',
    phonenumberP :'',
    adress:'',
    Date:'',
    gender:'',
    statue:'',
    level:''
  }


  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getStudentDetails(this.route.snapshot.params.id);
  }

  getStudentDetails(id: number) {
    this.studentService.getStudentById(id)
      .subscribe((data: any) => {
        this.student = data;
        console.log(this.student);
      });           
  }
  onUpdate(){
    this.studentService.updateStudent(this.student).subscribe(()=>{
      this.getStudentDetails(this.student.id);
      alert("étudiant mis à jour avec succès");
      this.router.navigate(['home/etudiant']);}
      , (err: any) => {
        console.log(err);
        alert("Erreur !!");
        this.router.navigate(['home/etudiant']);
      }
      
    );
  }
}
