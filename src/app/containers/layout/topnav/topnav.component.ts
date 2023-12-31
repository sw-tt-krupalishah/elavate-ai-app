import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService, ISidebar } from '../sidebar/sidebar.service';
import { Router } from '@angular/router';
import { LangService, Language } from 'src/app/shared/lang.service';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import { TopnavService } from './topnav.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ["./topnav.component.scss"],
})
export class TopnavComponent implements OnInit, OnDestroy {
  sidebar: ISidebar;
  subscription: Subscription;
  displayName = 'Sarah Cortney';
  languages: Language[];
  currentLanguage: string;
  isSingleLang;
  isFullScreen = false;
  isDarkModeActive = false;
  searchKey = '';
  isDev = false;
  industry = 'Supply chain';
  IndustryTitle = 'Supply chain';
  IndustryDescription = 'With the rise of online shopping, e-commerce platforms require sophisticated software systems for inventory management, order processing, payment gateways, customer relationship management (CRM), and personalized shopping experiences.';
  selectedUser = "Bussiness User";
  selectedInd: number = 1;
  constructor(private sidebarService: SidebarService,private topnavService : TopnavService ,private authService: AuthService, private router: Router, private langService: LangService) {
    this.languages = this.langService.supportedLanguages;
    this.currentLanguage = this.langService.languageShorthand;
    this.isSingleLang = this.langService.isSingleLang;
    this.isDarkModeActive = this.getColor().indexOf('dark') > -1 ? true : false;
  }
  industryTypeChange(industryType){
    
    console.log(industryType);
    this.industry = industryType;
    if(industryType == "Supply chain"){
      this.selectedInd = 1;
      this.IndustryTitle = "Supply chain";
      this.IndustryDescription = "With the rise of online shopping, e-commerce platforms require sophisticated software systems for inventory management, order processing, payment gateways, customer relationship management (CRM), and personalized shopping experiences."
    }
    if(industryType == "HealthTech"){
      this.selectedInd = 2;
      this.IndustryTitle = "HealthTech";
      this.IndustryDescription = "Software development plays a crucial role in the healthcare industry, powering electronic health records (EHRs), telemedicine platforms, medical imaging software, health monitoring devices, and other digital health solutions."
    }
    if(industryType == "Artificial Intelligence(AI) and Machine Learning(ML)"){
      this.selectedInd = 3;
      this.IndustryTitle = "Artificial Intelligence(AI) and Machine Learning(ML)";
      this.IndustryDescription = "AI and ML technologies are being integrated into various industries, including healthcare, finance, transportation, and marketing, creating a high demand for software development in these areas."
    }
    if(industryType == "EdTech"){
      this.selectedInd = 4;
      this.IndustryTitle = "EdTech";
      this.IndustryDescription = "The education industry is embracing technology to enhance learning experiences. Educational software is being developed for online learning platforms, learning management systems (LMS), virtual reality (VR) and augmented reality (AR) applications, and personalized adaptive learning."
    }
    if(industryType == "Cybersecurity"){
      this.selectedInd = 5;
      this.IndustryTitle = "Cybersecurity";
      this.IndustryDescription = "As cyber threats continue to grow in sophistication, cybersecurity software development is in high demand. Companies and organizations need robust solutions for data protection, network security, threat detection, and encryption."
    }
    if(industryType == "Renewable Energy"){
      this.selectedInd = 6;
      this.IndustryTitle = "Renewable Energy";
      this.IndustryDescription = "The renewable energy sector is expanding rapidly, and software is needed for energy management, smart grids, energy storage, and optimization algorithms to improve efficiency and sustainability"
    }
  }
  openfileDialog(){
    document.getElementById('fileLoader').click();
  }
  onIndustrySelect(industry) {
    if (industry) {
      this.router.navigate(["/app/pages/feature"], {
        queryParams: { key: industry.title},
      });
    }
  }
  onDarkModeChange(event) {
    let color = this.getColor();
    if (color.indexOf('dark') > -1) {
      color = color.replace('dark', 'light');
    } else if (color.indexOf('light') > -1) {
      color = color.replace('light', 'dark');
    }
    localStorage.setItem(environment.themeColorStorageKey, color);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
  getGitHubURL(){
    this.topnavService.getGitURL({"getGitURL" : "" }).subscribe(data => {});
  }
  getColor() {
    return localStorage.getItem(environment.themeColorStorageKey)
      ? localStorage.getItem(environment.themeColorStorageKey)
      : environment.defaultColor;
  }

  fullScreenClick() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  onLanguageChange(lang) {
    this.langService.language = lang.code;
    this.currentLanguage = this.langService.languageShorthand;
  }

  ngOnInit() {
    if (this.authService.user) {
      this.displayName = this.authService.user.displayName;
    }
    this.subscription = this.sidebarService.getSidebar().subscribe(
      res => {
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  menuButtonClick = (e: { stopPropagation: () => void; }, menuClickCount: number, containerClassnames: string) => {
    if (e) { e.stopPropagation(); }

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);

    this.sidebarService.setContainerClassnames(
      ++menuClickCount,
      containerClassnames,
      this.sidebar.selectedMenuHasSubItems
    );
  }

  mobileMenuButtonClick = (event: { stopPropagation: () => void; }, containerClassnames: string) => {
    if (event) { event.stopPropagation(); }
    this.sidebarService.clickOnMobileMenu(containerClassnames);
  }

  onSignOut() {
    this.authService.signOut().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  searchKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.search();
    } else if (event.key === 'Escape') {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) { input.classList.remove('mobile-view'); }
      this.searchKey = '';
    }
  }

  searchAreaClick(event) {
    event.stopPropagation();
  }
  searchClick(event) {
    if (window.innerWidth < environment.menuHiddenBreakpoint) {
      let elem = event.target;
      if (!event.target.classList.contains('search')) {
        if (event.target.parentElement.classList.contains('search')) {
          elem = event.target.parentElement;
        } else if (
          event.target.parentElement.parentElement.classList.contains('search')
        ) {
          elem = event.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains('mobile-view')) {
        this.search();
        elem.classList.remove('mobile-view');
      } else {
        elem.classList.add('mobile-view');
      }
    } else {
      this.search();
    }
    event.stopPropagation();
  }
  changePersona(user){
    this.selectedUser = user;
    this.isDev = user == 'Developer' ? true : false;
  }
  search() {
    if (this.searchKey && this.searchKey.length > 1) {
      this.router.navigate(['/app/pages/miscellaneous/search'], { queryParams: { key: this.searchKey.toLowerCase().trim() } });
      this.searchKey = '';
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event) {
    const input = document.querySelector('.mobile-view');
    if (input && input.classList) { input.classList.remove('mobile-view'); }
    this.searchKey = '';
  }
}
