import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-article-on-snf',
  templateUrl: './article-on-snf.component.html',
  styleUrls: ['./article-on-snf.component.css']
})
export class ArticleOnSNFComponent implements OnInit {

  name = '';
  image: File | null = null;
  article_on_snf: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getarticle_on_snf().subscribe(
      (response) => {
        console.log(response);
        this.article_on_snf = response;
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
  // addarticle_on_snf(): void {
  //   const formData = new FormData();
  //   formData.append('name', this.name);
  //   if (this.image) {
  //     formData.append('image', this.image);
  //   }

  //   this.service.addarticle_on_snf(formData).subscribe(
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

  // updatearticle_on_snf(id: number): void {
  //   const formData = new FormData();
  //   formData.append('name', this.selectedItem.name);
  //   if (this.image) {
  //     formData.append('image', this.image);
  //   }

  //   this.service.updatearticle_on_snf(id, formData).subscribe(
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

  // deletearticle_on_snf(id: number): void {
  //   this.service.deletearticle_on_snf(id).subscribe(
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

