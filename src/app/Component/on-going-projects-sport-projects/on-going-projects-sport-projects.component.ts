import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-sport-projects',
  templateUrl: './on-going-projects-sport-projects.component.html',
  styleUrls: ['./on-going-projects-sport-projects.component.css']
})
export class OnGoingProjectsSportProjectsComponent {
  name = '';
  image: File | null = null;
  OnGoingProject_Sport_ProjectsData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getOnGoingProject_Sport_Projects().subscribe(
      (response) => {
        console.log(response);
        this.OnGoingProject_Sport_ProjectsData = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }

}
