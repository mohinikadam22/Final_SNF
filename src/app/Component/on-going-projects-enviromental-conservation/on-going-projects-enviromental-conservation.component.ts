import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-enviromental-conservation',
  templateUrl: './on-going-projects-enviromental-conservation.component.html',
  styleUrls: ['./on-going-projects-enviromental-conservation.component.css']
})
export class OnGoingProjectsEnviromentalConservationComponent {
  name = '';
  image: File | null = null;
  OnGoingProject_Environmental_ConservationData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getOnGoingProject_Environmental_Conservation().subscribe(
      (response) => {
        console.log(response);
        this.OnGoingProject_Environmental_ConservationData = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }

}
