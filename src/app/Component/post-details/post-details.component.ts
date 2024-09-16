import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  name = '';
  image: File | null = null;
  FounderParticipantsData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getnationwidesupport().subscribe(
      (response) => {
        console.log(response);
        this.FounderParticipantsData = response;
      }
    );
  }
  limitWords(text: string, limit: number): string {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }
  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }

}
