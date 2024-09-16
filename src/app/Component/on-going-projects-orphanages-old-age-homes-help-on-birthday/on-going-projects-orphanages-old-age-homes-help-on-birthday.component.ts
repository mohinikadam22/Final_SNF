import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-orphanages-old-age-homes-help-on-birthday',
  templateUrl: './on-going-projects-orphanages-old-age-homes-help-on-birthday.component.html',
  styleUrls: ['./on-going-projects-orphanages-old-age-homes-help-on-birthday.component.css']
})
export class OnGoingProjectsOrphanagesOldAgeHomesHelpOnBirthdayComponent {
  name = '';
  image: File | null = null;
  OnGoingProject_Birthday_Celebrations: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getOnGoingProject_Birthday_Celebrations().subscribe(
      (response) => {
        console.log(response);
        this.OnGoingProject_Birthday_Celebrations = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }
}
