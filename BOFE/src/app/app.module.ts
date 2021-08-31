import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeDashComponent } from './welcome-dash/welcome-dash.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { PublicationsComponent } from './publications/publications.component';
import { AffectEtuGrpComponent } from './affect-etu-grp/affect-etu-grp.component';
import { AffectEnsGrpComponent } from './affect-ens-grp/affect-ens-grp.component';
import { GroupsComponent } from './groups/groups.component';
import { MatiereComponent } from './matiere/matiere.component';
import { PaiementComponent } from './paiement/paiement.component';
import { CaisseEnsComponent } from './caisse-ens/caisse-ens.component';
import { CaisseEliosComponent } from './caisse-elios/caisse-elios.component';
import { BrowseUserComponent } from './etudiant/browse-user/browse-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddStudentComponent } from './etudiant/add-student/add-student.component';
import { UpdateStudentComponent } from './etudiant/update-student/update-student.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowseTeacherComponent } from './enseignant/browse-teacher/browse-teacher.component';
import { AddTeacherComponent } from './enseignant/add-teacher/add-teacher.component';
import { UpdateTeacherComponent } from './enseignant/update-teacher/update-teacher.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UpdateSubjectComponent } from './matiere/update-subject/update-subject.component';
import { AddSubjectComponent } from './matiere/add-subject/add-subject.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    WelcomeDashComponent,
    EtudiantComponent,
    EnseignantComponent,
    CommentairesComponent,
    PublicationsComponent,
    AffectEtuGrpComponent,
    AffectEnsGrpComponent,
    GroupsComponent,
    MatiereComponent,
    PaiementComponent,
    CaisseEnsComponent,
    CaisseEliosComponent,
    BrowseUserComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    BrowseTeacherComponent,
    AddTeacherComponent,
    UpdateTeacherComponent,
    SignInComponent,
    UpdateSubjectComponent,
    AddSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
