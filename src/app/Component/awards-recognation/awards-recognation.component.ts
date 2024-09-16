import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-awards-recognation',
  templateUrl: './awards-recognation.component.html',
  styleUrls: ['./awards-recognation.component.css']
})
export class AwardsRecognationComponent implements OnInit {

  name = '';
  image: File | null = null;
  awards_recognation: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getawards_recognation().subscribe(
      (response) => {
        console.log(response);
        this.awards_recognation = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }
  selectedImageUrl: string = '';
  isModalOpen: boolean = false;

  openModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


  // addawards_recognation(): void {
  //   const formData = new FormData();
  //   formData.append('name', this.name);
  //   if (this.image) {
  //     formData.append('image', this.image);
  //   }

  //   this.service.addawards_recognation(formData).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.fetchData();
  //       location.reload();
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // onSelect(item: any): void {
  //   this.selectedItem = { ...item };
  // }

  // updateawards_recognation(id: number): void {
  //   const formData = new FormData();
  //   formData.append('name', this.selectedItem.name);
  //   if (this.image) {
  //     formData.append('image', this.image);
  //   }

  //   this.service.updateawards_recognation(id, formData).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.fetchData();
  //       location.reload();
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // deleteawards_recognation(id: number): void {
  //   this.service.deleteawards_recognation(id).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.fetchData();
  //       location.reload();
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }


}
