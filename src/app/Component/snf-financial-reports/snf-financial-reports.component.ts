import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-snf-financial-reports',
  templateUrl: './snf-financial-reports.component.html',
  styleUrls: ['./snf-financial-reports.component.css']
})
export class SNFFinancialReportsComponent implements OnInit {

  reportnme = '';
  pdf: File | null = null;
  reportdata: any[] = [];
  selectedItem: any = { _id: '', reportnme: '', pdf: '' };

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.service.getReport().subscribe(
      (response: any) => {
        this.reportdata = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.pdf = event.target.files[0];
  }

  downloadPDF(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
    // const link = document.createElement('a');
    // link.href = pdfUrl;
    // link.download = this.extractFileName(pdfUrl);
    // window.open(pdfUrl, '_blank');
    // link.click();
  }

  extractFileName(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 1];
  }
}
