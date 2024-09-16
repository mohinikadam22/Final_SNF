import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-educational-facilities',
  templateUrl: './on-going-projects-educational-facilities.component.html',
  styleUrls: ['./on-going-projects-educational-facilities.component.css']
})
export class OnGoingProjectsEducationalFacilitiesComponent {
  name = '';
  image: File | null = null;
  OnGoingProject_Educational_FacilitiesData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getOnGoingProject_Educational_Facilities().subscribe(
      (response) => {
        console.log(response);
        this.OnGoingProject_Educational_FacilitiesData = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }
}
