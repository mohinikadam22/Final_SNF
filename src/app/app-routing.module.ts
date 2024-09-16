import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './Component/home2/home2.component';
import { Home1Component } from './Component/home1/home1.component';
import { EventDetailComponent } from './Component/event-detail/event-detail.component';
import {OnGoingProjectsCleanWaterProjectsComponent  } from './Component/on-going-projects-clean-water-projects/on-going-projects-clean-water-projects.component';
import { SNFFinancialReportsComponent } from './Component/snf-financial-reports/snf-financial-reports.component';
import { ArticleOnSNFComponent } from './Component/article-on-snf/article-on-snf.component';
import { ContactComponent } from './Component/contact/contact.component';
import { FoundersViewComponent } from './Component/founders-view/founders-view.component';
import { ImportantSNFProjectsComponent } from './Component/important-snf-projects/important-snf-projects.component';
import { TeamSNFComponent } from './Component/team-snf/team-snf.component';
import { VisionMissionComponent } from './Component/vision-mission/vision-mission.component';
import { SNFOverviewComponent } from './Component/snf-overview/snf-overview.component';
import { TeamSNFMentorsComponent } from './Component/team-snf-mentors/team-snf-mentors.component';
import { TeamSNFNRIParticipantsComponent } from './Component/team-snf-nri-participants/team-snf-nri-participants.component';
import { TeamSNFStateParticipantsComponent } from './Component/team-snf-state-participants/team-snf-state-participants.component';
import { OnGoingProjectsShahidJawanFundComponent } from './Component/on-going-projects-shahid-jawan-fund/on-going-projects-shahid-jawan-fund.component';
import { OnGoingProjectsEducationalFacilitiesComponent } from './Component/on-going-projects-educational-facilities/on-going-projects-educational-facilities.component';
import { OnGoingProjectsHealthMedicalProjectsComponent } from './Component/on-going-projects-health-medical-projects/on-going-projects-health-medical-projects.component';
import { OnGoingProjectsEnviromentalConservationComponent } from './Component/on-going-projects-enviromental-conservation/on-going-projects-enviromental-conservation.component';
import { OnGoingProjectsSportProjectsComponent } from './Component/on-going-projects-sport-projects/on-going-projects-sport-projects.component';
import { OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent } from './Component/on-going-projects-orphanages-old-age-homes-help-on-birthday/on-going-projects-orphanages-old-age-homes-help-on-birthday.component';
import { UpcommingProjectsComponent } from './Component/upcomming-projects/upcomming-projects.component';
import { StatisticsAndStudyComponent } from './Component/statistics-and-study/statistics-and-study.component';
import { SNFInNewsPapersComponent } from './Component/snf-in-news-papers/snf-in-news-papers.component';
import { SNFTVNewsDocumentryComponent } from './Component/snf-tv-news-documentry/snf-tv-news-documentry.component';
import { AwardsRecognationComponent } from './Component/awards-recognation/awards-recognation.component';
import { DonateNowComponent } from './Component/donate-now/donate-now.component';
import { VolunteersComponent } from './Component/volunteers/volunteers.component';
import { PrivacyPolicyComponent } from './Component/privacy-policy/privacy-policy.component';
import { TermConditionComponent } from './Component/term-condition/term-condition.component';
import { ProjectDetailsComponent } from './Component/project-details/project-details.component';
import { PostDetailsComponent } from './Component/post-details/post-details.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home1Component },

  {
    path: 'whoweare', component: EventDetailComponent
  },
  //  who we are --> dropdown  1
  {
    path: 'about', component: EventDetailComponent
  },
  {
    path: 'founderview', component: FoundersViewComponent
  },
  {
    path: 'importsnfproject', component: ImportantSNFProjectsComponent
  },

  {
    path: 'teamsnf', component: TeamSNFComponent
  },
  {path:'privacy',component:PrivacyPolicyComponent},
  {path:'term',component:TermConditionComponent},
  //  who we are --> dropdown in dropewon
  { path: 'teamsnffounder', component: TeamSNFComponent },
  { path: 'teamsnfmentores', component: TeamSNFMentorsComponent },
  { path: 'teamsnfnripart', component: TeamSNFNRIParticipantsComponent },
  { path: 'teamsnfstatepart', component: TeamSNFStateParticipantsComponent },
  {path :'teamsnfsupporters',component:VolunteersComponent},
  {path:'teamnationsupporters',component:PostDetailsComponent},

  { path: 'visionmission', component: VisionMissionComponent },

  {
    path: 'snfoverview', component: SNFOverviewComponent
  },









  { path: 'whatwedo', component: OnGoingProjectsCleanWaterProjectsComponent },
  { path: 'whatwedo/:category', component: OnGoingProjectsCleanWaterProjectsComponent },
  { path: 'whatwedo/:category', component: OnGoingProjectsCleanWaterProjectsComponent },
  { path: 'ongoingproject', component: OnGoingProjectsCleanWaterProjectsComponent },
  { path: 'upcomingProject', component: UpcommingProjectsComponent },

  // subpages 
  // { path: 'whatwedocleanPro', component: GetUpcomingEventsComponent },
  { path: 'whatwedoshahidjawan', component: OnGoingProjectsShahidJawanFundComponent },
  { path: 'whatwedoedufac', component: OnGoingProjectsEducationalFacilitiesComponent },
  { path: 'whatwedohealth', component: OnGoingProjectsHealthMedicalProjectsComponent },
  { path: 'whatwedoenvconversation', component: OnGoingProjectsEnviromentalConservationComponent },
  { path: 'whatwedosportpro', component: OnGoingProjectsSportProjectsComponent },
  { path: 'whatwedoorpha', component: OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent },




  { path: 'reports', component: SNFFinancialReportsComponent },
  // dropwoun 
  { path: 'finicialreports', component: SNFFinancialReportsComponent },
  { path: 'staticsreports', component: StatisticsAndStudyComponent },


  { path: 'media', component: ArticleOnSNFComponent },
  // dropwoun 
  { path: 'mediaarticle', component: ArticleOnSNFComponent },
  { path: 'medianewspapers', component: SNFInNewsPapersComponent },
  { path: 'mediadocumentry', component: SNFTVNewsDocumentryComponent },
  { path: 'mediaawards', component: AwardsRecognationComponent },
  {path:'projectDetails',component:ProjectDetailsComponent},

  { path: 'Contact', component: ContactComponent },
  {
    path: 'DonateNow', component: DonateNowComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
