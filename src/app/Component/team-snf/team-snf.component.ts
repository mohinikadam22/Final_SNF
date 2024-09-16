import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-team-snf',
  templateUrl: './team-snf.component.html',
  styleUrls: ['./team-snf.component.css']
})
  export class TeamSNFComponent implements OnInit {

    name = '';
    image: File | null = null;
    FounderParticipantsData: any;
    selectedItem: any = { _id: '', name: '', imageUrl: '' };
  
    constructor(private service: ServiceService, private router: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.fetchData();
    }
    limitWords(text: string, limit: number): string {
      const words = text.split(' ');
      if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
      }
      return text;
    }
  
    fetchData() {
      this.service.getFounderParticipants().subscribe(
        (response) => {
          console.log(response);
          this.FounderParticipantsData = response;
        }
      );
    }
  
    onFileChange(event: any): void {
      this.image = event.target.files[0];
    }
  
  
  
  }