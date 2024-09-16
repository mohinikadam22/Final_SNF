import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  isMapVisible: boolean = false;

  toggleMap() {
    this.isMapVisible = !this.isMapVisible;
  }

}
