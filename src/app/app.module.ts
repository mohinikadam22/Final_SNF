import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Home1Component } from './Component/home1/home1.component';
import { Home2Component } from './Component/home2/home2.component';
import { Home3Component } from './Component/home3/home3.component';
import { DonationComponent } from './Component/donation/donation.component';
import { Grid2ColunmsComponent } from './Component/grid-2-colunms/grid-2-colunms.component';
import { Grid3ColunmsComponent } from './Component/grid-3-colunms/grid-3-colunms.component';
import { DonationDetailsComponent } from './Component/donation-details/donation-details.component';
import { EventsComponent } from './Component/events/events.component';
import { GridSidebarComponent } from './Component/grid-sidebar/grid-sidebar.component';
import { EventDetailComponent } from './Component/event-detail/event-detail.component';
import { NewsComponent } from './Component/news/news.component';
import { GridBlogComponent } from './Component/grid-blog/grid-blog.component';
import { PostDetailsComponent } from './Component/post-details/post-details.component';
import { ShopComponent } from './Component/shop/shop.component';
import { DetailComponent } from './Component/detail/detail.component';
import { AboutComponent } from './Component/about/about.component';
import { VolunteersComponent } from './Component/volunteers/volunteers.component';
import { BecomeAVolunteerComponent } from './Component/become-a-volunteer/become-a-volunteer.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import { ContactComponent } from './Component/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FoundersViewComponent } from './Component/founders-view/founders-view.component';
import { ImportantSNFProjectsComponent } from './Component/important-snf-projects/important-snf-projects.component';
import { TeamSNFComponent } from './Component/team-snf/team-snf.component';
import { TeamSNFMentorsComponent } from './Component/team-snf-mentors/team-snf-mentors.component';
import { TeamSNFNRIParticipantsComponent } from './Component/team-snf-nri-participants/team-snf-nri-participants.component';
import { TeamSNFStateParticipantsComponent } from './Component/team-snf-state-participants/team-snf-state-participants.component';
import { VisionMissionComponent } from './Component/vision-mission/vision-mission.component';
import { SNFOverviewComponent } from './Component/snf-overview/snf-overview.component';
import { ArticleOnSNFComponent } from './Component/article-on-snf/article-on-snf.component';
import { SNFInNewsPapersComponent } from './Component/snf-in-news-papers/snf-in-news-papers.component';
import { SNFTVNewsDocumentryComponent } from './Component/snf-tv-news-documentry/snf-tv-news-documentry.component';
import { DemoComponent } from './demo/demo.component';
import { SNFFinancialReportsComponent } from './Component/snf-financial-reports/snf-financial-reports.component';
import { StatisticsAndStudyComponent } from './Component/statistics-and-study/statistics-and-study.component';
import { OnGoingProjectsCleanWaterProjectsComponent } from './Component/on-going-projects-clean-water-projects/on-going-projects-clean-water-projects.component'; // Ensure correct import path
import { OnGoingProjectsShahidJawanFundComponent } from './Component/on-going-projects-shahid-jawan-fund/on-going-projects-shahid-jawan-fund.component';
import { OnGoingProjectsEducationalFacilitiesComponent } from './Component/on-going-projects-educational-facilities/on-going-projects-educational-facilities.component';
import { OnGoingProjectsHealthMedicalProjectsComponent } from './Component/on-going-projects-health-medical-projects/on-going-projects-health-medical-projects.component';
import { OnGoingProjectsEnviromentalConservationComponent } from './Component/on-going-projects-enviromental-conservation/on-going-projects-enviromental-conservation.component';
import { OnGoingProjectsSportProjectsComponent } from './Component/on-going-projects-sport-projects/on-going-projects-sport-projects.component';
import { OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent } from './Component/on-going-projects-orphanages-old-age-homes-help-on-birthday/on-going-projects-orphanages-old-age-homes-help-on-birthday.component';
import { UpcommingProjectsComponent } from './Component/upcomming-projects/upcomming-projects.component';
import { AwardsRecognationComponent } from './Component/awards-recognation/awards-recognation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DonateNowComponent } from './Component/donate-now/donate-now.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { TermConditionComponent } from './Component/term-condition/term-condition.component';
import { PrivacyPolicyComponent } from './Component/privacy-policy/privacy-policy.component';
import { ProjectDetailsComponent } from './Component/project-details/project-details.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    DonationComponent,
    Grid2ColunmsComponent,
    Grid3ColunmsComponent,
    DonationDetailsComponent,
    EventsComponent,
    GridSidebarComponent,
    EventDetailComponent,
    NewsComponent,
    GridBlogComponent,
    PostDetailsComponent,
    ShopComponent,
    DetailComponent,
    AboutComponent,
    VolunteersComponent,
    BecomeAVolunteerComponent,
    PageNotFoundComponent,
    ContactComponent,
    FoundersViewComponent,
    ImportantSNFProjectsComponent,
    TeamSNFComponent,
    TeamSNFMentorsComponent,
    TeamSNFNRIParticipantsComponent,
    TeamSNFStateParticipantsComponent,
    VisionMissionComponent,
    SNFOverviewComponent,
    ArticleOnSNFComponent,
    SNFInNewsPapersComponent,
    SNFTVNewsDocumentryComponent,
    DemoComponent,
    SNFFinancialReportsComponent,
    StatisticsAndStudyComponent,
    OnGoingProjectsCleanWaterProjectsComponent,
    OnGoingProjectsShahidJawanFundComponent,
    OnGoingProjectsEducationalFacilitiesComponent,
    OnGoingProjectsHealthMedicalProjectsComponent,
    OnGoingProjectsEnviromentalConservationComponent,
    OnGoingProjectsSportProjectsComponent,
    OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent,
    UpcommingProjectsComponent,
    AwardsRecognationComponent,
    DonateNowComponent,
    TermConditionComponent,
    PrivacyPolicyComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
