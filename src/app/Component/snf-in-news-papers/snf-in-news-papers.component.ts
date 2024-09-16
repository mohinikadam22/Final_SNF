import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-snf-in-news-papers',
  templateUrl: './snf-in-news-papers.component.html',
  styleUrls: ['./snf-in-news-papers.component.css']
})
  export class SNFInNewsPapersComponent implements OnInit {

    name = '';
    image: File | null = null;
    snf_in_news_papers: any;
    selectedItem: any = { _id: '', name: '', imageUrl: '' };
  
    constructor(private service: ServiceService, private router: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.fetchData();
    }
    fetchData() {
      this.service.getsnf_in_news_papers().subscribe(
        (response) => {
          console.log(response);
          this.snf_in_news_papers = response;
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
  
  
    // addsnf_in_news_papers(): void {
    //   const formData = new FormData();
    //   formData.append('name', this.name);
    //   if (this.image) {
    //     formData.append('image', this.image);
    //   }
  
    //   this.service.addsnf_in_news_papers(formData).subscribe(
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
  
    // updatesnf_in_news_papers(id: number): void {
    //   const formData = new FormData();
    //   formData.append('name', this.selectedItem.name);
    //   if (this.image) {
    //     formData.append('image', this.image);
    //   }
  
    //   this.service.updatesnf_in_news_papers(id, formData).subscribe(
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
  
    // deletesnf_in_news_papers(id: number): void {
    //   this.service.deletesnf_in_news_papers(id).subscribe(
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
