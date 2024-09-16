import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-shahid-jawan-fund',
  templateUrl: './on-going-projects-shahid-jawan-fund.component.html',
  styleUrls: ['./on-going-projects-shahid-jawan-fund.component.css']
})
export class OnGoingProjectsShahidJawanFundComponent {
  name = '';
  image: File | null = null;
  OnGoingProject_Shahid_Jawan_FundData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getOnGoingProject_Shahid_Jawan_Fund().subscribe(
      (response) => {
        console.log(response);
        this.OnGoingProject_Shahid_Jawan_FundData = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }
}
