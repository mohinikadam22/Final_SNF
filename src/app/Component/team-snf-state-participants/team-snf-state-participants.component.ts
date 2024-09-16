import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-team-snf-state-participants',
  templateUrl: './team-snf-state-participants.component.html',
  styleUrls: ['./team-snf-state-participants.component.css']
})
  export class TeamSNFStateParticipantsComponent implements OnInit {

    name = '';
    image: File | null = null;
    State_ParticipantsData: any;
    selectedItem: any = { _id: '', name: '', imageUrl: '' };
  
    constructor(private service: ServiceService, private router: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.fetchData();
    }
    fetchData() {
      this.service.getState_Participants().subscribe(
        (response) => {
          console.log(response);
          this.State_ParticipantsData = response;
        }
      );
    }
  
    onFileChange(event: any): void {
      this.image = event.target.files[0];
    }
 
  }
