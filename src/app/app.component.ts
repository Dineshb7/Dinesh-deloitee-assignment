import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  navbarOpen = false;
  public clicked = false;
  element: any;
  toggleNavbar(): any {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(
    private router: Router,
    private service: AppserviceService
  ) { }
  ngOnInit(): void { }
  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

  @HostListener('document:click', ['$event'])
  private clickedOutside(event): void {
    if (this.clicked) {
      this.element.nativeElement.querySelector('.dropdown - menu').classList.toggle('show');
    }
  }
  searchTextFn(event): void {
    this.service.updateSearch(event.target.value);
  }

}
