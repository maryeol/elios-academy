import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './etudiant/add-student/add-student.component';
import { BrowseUserComponent } from './etudiant/browse-user/browse-user.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { WelcomeDashComponent } from './welcome-dash/welcome-dash.component';
import { UpdateStudentComponent } from './etudiant/update-student/update-student.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { AddTeacherComponent } from './enseignant/add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './enseignant/update-teacher/update-teacher.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PaiementComponent } from './paiement/paiement.component';
import { MatiereComponent} from './matiere/matiere.component';
import { UpdateSubjectComponent } from './matiere/update-subject/update-subject.component';
import { AddSubjectComponent} from './matiere/add-subject/add-subject.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path :'home' , component:WelcomeDashComponent},
  {path : 'home/etudiant' , component:EtudiantComponent},
  {path: 'home/etudiant/add', component: AddStudentComponent},
  {path : 'home/etudiant/update/:id' , component:UpdateStudentComponent},
  {path :'home/enseignant' , component:EnseignantComponent},
  {path : 'home/enseignant/add' , component:AddTeacherComponent},
  {path : 'home/enseignant/update/:id' , component:UpdateTeacherComponent},
  {path : 'home/signin' , component:SignInComponent},
  {path : 'home/etudiant/update/:id/payment' , component:PaiementComponent},
  {path : 'home/Paiement' , component: PaiementComponent},
  {path : 'home/matiere' , component:MatiereComponent},
  {path : 'home/matiere/update/:id' , component:UpdateSubjectComponent},
  {path : 'home/matiere/add' , component:AddSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
