import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-team-snf-mentors',
  templateUrl: './team-snf-mentors.component.html',
  styleUrls: ['./team-snf-mentors.component.css']
})
  export class TeamSNFMentorsComponent implements OnInit {

    name = '';
    image: File | null = null;
    MentorsData: any;
    selectedItem: any = { _id: '', name: '', imageUrl: '' };
  
    constructor(private service: ServiceService, private router: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.fetchData();
    }
    fetchData() {
      this.service.getMentors().subscribe(
        (response) => {
          console.log(response);
          this.MentorsData = response;
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
