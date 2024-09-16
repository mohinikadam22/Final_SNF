import { Component } from '@angular/core';

@Component({
  selector: 'app-donate-now',
  templateUrl: './donate-now.component.html',
  styleUrls: ['./donate-now.component.css']
})
export class DonateNowComponent {
  banks=  [
    {
      bankName: 'State Bank of India, Sharanpur Road Branch, Nashik 422002',
      accountName: 'Social Networking Forum',
      accountNumber: '34691906559',
      accountType: 'Current',
      ifscCode: 'SBIN0060431',
      micrCode: '422002017'
    },
    {
      bankName: 'Bank of Maharashtra, Canada Corner Branch, Nashik 422002',
      accountName: 'Social Networking Forum',
      accountNumber: '60252759927',
      accountType: 'Saving',
      ifscCode: 'MAHB0000672',
      micrCode: '422014004'
    },
    {
      bankName: 'Yes Bank, College Road Branch, Nashik 422002',
      accountName: 'Social Networking Forum',
      accountNumber: '002194600000191',
      accountType: 'Saving',
      ifscCode: 'YESB0000021',
      micrCode: '422532002'
    }
  ];

  constructor(){}

  // printPage() {
  //   window.print();
  // }
 
 printPage() {
  const downloadLink1 = 'https://snfbankdetails.tiiny.site';

  // Open the download link in a new tab or window
  window.open(downloadLink1, '_blank');

  // Print the current page
  window.print();
}

  downloadDetails(): void {
    //  const a = document.createElement('a');
    //  a.href = 'https://snfbankdetails.tiiny.site';
    //  a.download = 'SNF_Bank_Details.pdf';
    // a.click();
    const downloadLink = 'https://snfbankdetails.tiiny.site';
    window.open(downloadLink, '_blank');
  }
  payment(){
    const downloadLink = 'https://rzp.io/l/SNF-DONATION';
    window.open(downloadLink, '_blank');
   
  }

  private generateTextContent() {
    let content = 'Thank you for your wish to donate\n\n';
    content += 'Social Networking Forum\n';
    content += 'Registered Under Indian Public Trust Act 1950\n';
    content += 'Reg. No. F-15528 - Nashik\n';
    content += 'Societies Registration Act 1860\n';
    content += 'Reg. No. MAH/3041/N\n';
    content += 'Under Section 12AA Of The Income Tax Act 1961\n';
    content += '1086/493/2016-17/7751\n\n';
    content += 'Bank Account Details\n\n';

    this.banks.forEach(bank => {
      content += `Bank Name: ${bank.bankName}\n`;
      content += `Account Name: ${bank.accountName}\n`;
      content += `Account Number: ${bank.accountNumber}\n`;
      content += `Account Type: ${bank.accountType}\n`;
      content += `IFSC Code: ${bank.ifscCode}\n`;
      content += `MICR Code: ${bank.micrCode}\n\n`;
    });

    return content;
  }
}
