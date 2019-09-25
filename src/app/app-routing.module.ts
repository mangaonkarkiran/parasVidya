import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AllImagesComponent} from './components/all-images/all-images.component';
import {DirectorDeskComponent} from './components/director-desk/director-desk.component';
import {AdmissionComponent} from './components/admission/admission.component';
import {CareersComponent} from './components/careers/careers.component';
import {AlumniComponent} from './components/alumni/alumni.component';
import {InfrastructureComponent} from './components/infrastructure/infrastructure.component';
import {HousesComponent} from './components/houses/houses.component';
import { TimeTableComponent } from './components/time-table/time-table.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ENGLISHLITERATURComponent } from './components/english-literatur/english-literatur.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { StudentVerificationComponent } from './components/student-verification/student-verification.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    children: [{path: 'directorDesk', component: DirectorDeskComponent},{path: 'cbse-disclosure', component: ENGLISHLITERATURComponent}],
    
  },
  {
    path: 'gallery',
    component: AllImagesComponent,
  },
  {
    path: 'academics',
    children: [{path: 'admissions', component: AdmissionComponent}],
  },
  {
    path: 'academics',
    children: [{path: 'time-table', component: TimeTableComponent}],
  },
  {
    path: 'careers',
    component: CareersComponent,
  },

  {
    path: 'alumni-registration',
    component: AlumniComponent,
  },

  {
    path: 'infrastructure',
    component: InfrastructureComponent,
  },

  {
    path: 'houses',
    component: HousesComponent,
  },
  {
    path: 'clubs',
    component: ClubsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'cbse-disclosure',
    component: ENGLISHLITERATURComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'disclaimer',
    component: DisclaimerComponent,
  },
  {
    path: 'student-document-verification',
    component: StudentVerificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
