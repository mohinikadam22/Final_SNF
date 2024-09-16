import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-team-snf-nri-participants',
  templateUrl: './team-snf-nri-participants.component.html',
  styleUrls: ['./team-snf-nri-participants.component.css']
})
export class TeamSNFNRIParticipantsComponent implements OnInit {

  title = 'mean-stack-example';
  name = '';
  image: File | null = null;
  NRI_ParticipantsData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };

  constructor(private service: ServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.service.getNRI_Participants().subscribe(
      (response) => {
        console.log(response);
        this.NRI_ParticipantsData = response;
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