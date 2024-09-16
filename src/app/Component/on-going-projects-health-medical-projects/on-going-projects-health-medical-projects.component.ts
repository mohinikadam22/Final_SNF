import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-health-medical-projects',
  templateUrl: './on-going-projects-health-medical-projects.component.html',
  styleUrls: ['./on-going-projects-health-medical-projects.component.css']
})
export class OnGoingProjectsHealthMedicalProjectsComponent {
  name = '';
  image: File | null = null;
  OnGoingProject_Health_MedicalProjectsData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getOnGoingProject_Health_MedicalProjects().subscribe(
      (response) => {
        console.log(response);
        this.OnGoingProject_Health_MedicalProjectsData = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }
}
