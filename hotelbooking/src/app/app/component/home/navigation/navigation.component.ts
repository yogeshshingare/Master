import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  
  constructor( ) { }

  ngOnInit() {
  }

  // private translate: TranslateService, 
  //   private authService: AuthService, 
  //   private transferService: TransferService,
  //   private themeService : ThemeService

  public chooseLanguage(langIsoCode : any): any {
    // this.transferService.setSessionLanguage(langIsoCode);
    // this.translate.use(langIsoCode);
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  public toggleTheme(){
    // const active = this.themeService.getActiveTheme() ;
    // if (active.name === 'light') {
    //   this.themeService.setTheme('dark');
    // } else {
    //   this.themeService.setTheme('light');
    // }
  }

  public canAccessPage(pageRoute : string)
  {
    // return !this.authService.isPageRestricted(pageRoute);
  }

}
