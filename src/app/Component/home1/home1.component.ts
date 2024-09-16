// import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Component, Pipe, PipeTransform } from '@angular/core';
declare var bootstrap: any; 
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {
  name = '';
  image: File | null = null;
  carrosalData: any;
  newsData: any;
  upcomingEvents: any;
  upcomingevents: any;
  newsAndArticlesData: any;
  selectedItem: any = { _id: '', name: '', imageUrl: '' };
  limitedUpcomingEvents: any;
  selectedCard: any = null;
  isModalOpen: boolean = false;
  currentIndex: number = 0;
  itemsPerSlide: number = 4;
  part1: string = '';
  part2: string = '';
    categoryParts: { description: string, count: string }[] = [];


  constructor(private service: ServiceService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.getNewsAndArticlesData();
    this.fetchCarrosalData();
    this.fetch2cardsData();
    this.fetch4CardsData();
    this.fetchsupporterData();
    this.fetchNewsData();
    this.fetcheventData();
    
    const carouselElement = document.getElementById('carouselExample');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000, // Auto-slide interval in milliseconds
        pause: 'hover'
      });
    }
  }

  fetcheventdata() {
    this.service.getNewsAndArticlesData().subscribe(
      (response) => {
        console.log(response);
        this.upcomingevents = response;
      }
    );
  }

  getNewsAndArticlesData() {
    this.service.getNewsAndArticlesData().subscribe(
      (response) => {
        console.log(response);
        this.newsAndArticlesData = response;
      }
    );
  }

  fetchCarrosalData() {
    this.service.getCarrosalData().subscribe(
      (response) => {
        console.log(response);
        this.carrosalData = response;
      }
    );
  }

  onFileChange(event: any): void {
    this.image = event.target.files[0];
  }
  //News data from Home
  fetchNewsData() {
    this.service.getHome_Media().subscribe(
      (response) => {
        console.log(response);
        this.newsData = response;
      }
    );
  }
  fetcheventData() {
    this.service.getupcomingevents().subscribe(
      (response) => {
        console.log(response);
        this.upcomingEvents = response;
        this.limitedUpcomingEvents = this.upcomingEvents.slice(0, 4);
        

      }
    );
  }
  openModal(item: any) {
    this.selectedCard = item;
    this.isModalOpen = true;

    // Disable body scroll when modal is open
    // document.body.classList.add('modal-open');
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCard = null;

    // Re-enable body scroll when modal is closed
    // document.body.classList.remove('modal-open');
  }

  // 2 cards 
  showFullPara2cards: false = false;
  toggleFullPara2cards(item: { showFullPara2cards: boolean; }): void {
    item.showFullPara2cards = !item.showFullPara2cards;
  }

  name2 = '';
  para2 = '';
  image2: File | null = null;
  Home_2_Cards_Data: any;
  selectedItem2: any = { _id: '', name2: '', para2: '', imageUrl: '' };

  fetch2cardsData() {
    this.service.get_Home_2_Cards().subscribe(
      (response) => {
        console.log(response);
        this.Home_2_Cards_Data = response;
      }
    );
  }

  onFileChange2(event: any): void {
    this.image2 = event.target.files[0];
  }


  // 4 Cards
  showFullPara4cards: false = false;
  toggleFullPara4cards(item: { showFullPara4cards: boolean; }): void {
    item.showFullPara4cards = !item.showFullPara4cards;
  }
  name4 = '';
  para4 = '';
  image4: File | null = null;
  Home_4_Cards_Data: any;
  selectedItem4: any = { _id: '', name4: '', para4: '', imageUrl: '' };

  // fetch4CardsData() {
  //   this.service.get_Home_4_Cards().subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.Home_4_Cards_Data = response;
  //     }
  //   );
  // }
  fetch4CardsData() {
    this.service.get_Home_4_Cards().subscribe(
      (response) => {
        console.log('Original Data:', response);
  
        // Check if the response is an array
        if (Array.isArray(response)) {
          // Reverse the array
          this.Home_4_Cards_Data = response.reverse();
        } else {
          // Handle the case where response is not an array
          console.error('Expected response to be an array');
          this.Home_4_Cards_Data = response; // or set to an empty array, depending on your needs
        }
  
        console.log('Reversed Data:', this.Home_4_Cards_Data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  onFileChange4(event: any): void {
    this.image = event.target.files[0];
  }



  // supporter image 
  namesup = '';
  image_sup: File | null = null;
  support_data: any;
  selectedItem_sup: any = { _id: '', namesup: '', imageUrl: '' };

  fetchsupporterData() {
    this.service.getSupporters().subscribe(
      (response) => {
        console.log(response);
        this.support_data = response;
      }
    );
  }

  onFileChange_sup(event: any): void {
    this.image = event.target.files[0];
  }
  
  limitWords(text: string, limit: number): string {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  }


}

