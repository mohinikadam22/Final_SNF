import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-important-snf-projects',
  templateUrl: './important-snf-projects.component.html',
  styleUrls: ['./important-snf-projects.component.css']
})
export class ImportantSNFProjectsComponent {
  paraList: any;

  constructor(private ImportantSnfProjectParaService: ServiceService) { }

  ngOnInit(): void {
    this.getParaList();
  }

  getParaList(): void {
    this.ImportantSnfProjectParaService.getImportant_SNF_Project_para().subscribe(
      (response) => {
        this.paraList = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
