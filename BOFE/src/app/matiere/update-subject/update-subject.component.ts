import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import {Subject} from '../../Subject';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {

  subject = {
    id: 0,
    name: '',
    level: '',
    classe :'',
    teacher : '',
    price :'',
  }

  constructor(private subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.getSubjectDetails(this.route.snapshot.params.id); 
  }
    getSubjectDetails(id: number) {
      this.subjectService.getSubjectById(id)
        .subscribe((data: any) => {
          this.subject = data;
          console.log(this.subject);
        });           
    }
  
    onUpdate(){
      this.subjectService.updateSubject(this.subject).subscribe(()=>{
        this.getSubjectDetails(this.subject.id);
        alert("matiere mis à jour avec succès");
        this.router.navigate(['home/matiere']);}
        , (err: any) => {
          console.log(err);
          alert("Erreur !!");
          this.router.navigate(['home/matiere']);
        }
        
      );
    }

}
