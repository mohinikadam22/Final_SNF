import { Component, ElementRef, OnInit, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-on-going-projects-clean-water-projects',
  templateUrl: './on-going-projects-clean-water-projects.component.html',
  styleUrls: ['./on-going-projects-clean-water-projects.component.css']
})
export class OnGoingProjectsCleanWaterProjectsComponent implements OnInit {
  // @ViewChild('belowSection') belowSection: ElementRef | undefined;



  upcomingEvents: any[] = []; // Array to hold upcoming events
  activeTab: any =1; // Default active tab ID
  activeTabfromanotherpage: any; // Default active tab ID
  panels: any[] = []; // Array to hold accordion panels data
  upcomingPara: any;
  selectedCategory: any;
  extradata:any;
  constructor(private service: ServiceService,private route: ActivatedRoute,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchData(); 
    this.fetchPara();
    this.route.queryParams.subscribe(params => {
      const tabId = +params['id']; // Retrieve tab ID from query parameters and convert to number
     
      
      if (tabId) {
        this.activeTabfromanotherpage = tabId;
        // Fetch and filter panels based on the active tab
        this.fetchData();
      }
      // if (tabId) {
      //   this.activeTab = tabId;
      //   // Fetch and filter panels based on the active tab
      //   this.fetchData();
      // }
    });
    
 
 
   
    // this.getP(); // Fetch accordion panels data
  }
  scrollToActiveTab(): void {
    const tab = document.querySelector(`[data-id="${this.activeTab}"]`);
    if (tab) {
      tab.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();  // Trigger change detection to ensure the view is updated
    this.scrollToActiveTab();
  }

  
  // togglePanel(index: number) {
  //   this.panels.forEach((panel, i) => {
  //     panel.isOpen = i === index ? !panel.isOpen : false;
  //     window.scrollTo(0,7)
  //   });
  // }
  togglePanel(index: number) {
    // Close all other panels except the clicked one
    this.panels.forEach((panel, i) => {
        if (i !== index) {
            panel.isOpen = false;
            // window.scrollTo(7,7);
        }
    });
 
    // Toggle the clicked panel's state
    this.panels[index].isOpen = !this.panels[index].isOpen;
  
    

    // Optional: Scroll to the clicked panel for better UX
    setTimeout(() => {
        const element = document.getElementById(`heading${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 30);
}


  
  



  //   fetchPara(){

  //   this.service.getupcomingPara().subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.panels = response;

  //   })
  // }
  fetchPara() {
    this.service.getupcomingPara().subscribe(
      (response: any) => {
        console.log(response);
        const activeEvent = this.upcomingEvents.find(event => event.id === this.activeTab);
        const targetCategory = activeEvent ? activeEvent.category : null;

        if (targetCategory) {
          // Filter the panels by the active tab's category
          this.panels = response.filter((panel: any) =>
            panel.category === targetCategory
          );
        } else {
          this.panels = [];
          console.warn('No matching category found for the selected tab.');
        }
      },
      (error) => {
        console.error('Error fetching panel data', error);
      }
    );
  }



  // Fetch upcoming events
  // fetchData() {
   
  //   this.service.getupcomingevents().subscribe(
  //     (response: any) => {
  //       console.log(response);
  //       this.upcomingEvents = response;
  //       // Set default active tab to the first event's ID
  //       if (this.upcomingEvents.length > 0) {
  //       this. extradata = this.upcomingEvents[0].id;
  //         this.fetchPara();
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching project data', error);
  //     }
  //   );
  // }
  fetchData() {
    this.service.getupcomingevents().subscribe(
      (response: any) => {
        console.log(response);
        this.upcomingEvents = response;
        // Set default active tab to the first event's ID
        if (this.upcomingEvents.length > 0) {
          this.activeTab = this.upcomingEvents[0].id;
          const data= this.upcomingEvents.find(event => event.id === this.activeTabfromanotherpage);
          this.activeTab= data.id
          console.error('activeTab', this.activeTab ,this.activeTabfromanotherpage);
          this.fetchPara();
        }
      },
      (error) => {
        console.error('Error fetching project data', error);
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

  // Handle tab selection
  setActiveTab(id: number): void {
   
    this.activeTab = id;
   
    this.fetchPara(); // Re-fetch and filter panels when the tab changes
  }

  // Check if the given tab is active
  isTabActive(id: number): boolean {
    return this.activeTab === id;
  }






}
