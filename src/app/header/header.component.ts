import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
activeDropdown: string | null = null;

toggleDropdown(dropdown: string) {
  // Check if the clicked dropdown is already active
  if (this.activeDropdown === dropdown) {
    // If it's already active, close it
    this.activeDropdown = null;
  } else {
    // Otherwise, close any open dropdown and open the clicked one
    this.activeDropdown = dropdown;
  }



  // sidebarOpen: boolean = true;

  // dropdownStates: { [key in 'whoWeAre' | 'whatWeDo' | 'reports' | 'media']: boolean } = {
  //   whoWeAre: false,
  //   whatWeDo: false,
  //   reports: false,
  //   media: false
  // };

  // openDropdown(menu: 'whoWeAre' | 'whatWeDo' | 'reports' | 'media') {
  //   this.dropdownStates[menu] = true;
  // }

  // closeDropdown(menu: 'whoWeAre' | 'whatWeDo' | 'reports' | 'media') {
  //   this.dropdownStates[menu] = false;
  // }
  // closeSidebar() {
  //   this.sidebarOpen = false;

  // ngOnInit(): void {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     const openNavButton = document.querySelector('.ova_openNav') as HTMLElement;
  //     const closeNavButton = document.querySelector('.ova_closeNav') as HTMLElement;
  //     const navMenu = document.querySelector('.ova_nav') as HTMLElement;

  //     openNavButton.addEventListener('click', () => {
  //       navMenu.classList.add('nav-open');
  //     });

  //     closeNavButton.addEventListener('click', () => {
  //       navMenu.classList.remove('nav-open');
  //     });
  //   });
  // }
  }}
