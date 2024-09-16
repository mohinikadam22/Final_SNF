import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent {

  
  name = '';
  image: File | null = null;
  MentorsData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getWellwisher().subscribe(
      (response) => {
        console.log(response);
        this.MentorsData = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }

}


