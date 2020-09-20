import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Observable } from 'rxjs';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentRate = 2;
  totalItems: number = 20;
  currentPage: number = 1;
  smallnumPages: number = 0;
  encapsulation: ViewEncapsulation.None;
  members: any = [];
  returnedArray = [];
  searchFilterArray: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: AppserviceService) { }


  ngOnInit(): void {
    this.members = [];
    this.service.getmemberData().subscribe(JSONdata => {
      this.members = JSONdata;
      this.service.updateSearchedTextValue.subscribe(updatedText => {
        this.searchFilterArray = this.members && this.members.filter(
          member => member.productOf.trim().toLowerCase().includes(updatedText.trim().toLowerCase()));
        (this.searchFilterArray && this.searchFilterArray.length > 0) ? this.members = this.searchFilterArray : this.members = JSONdata
        this.returnedArray = this.members.slice(0, 6);
      })
    })

  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.members.slice(startItem, endItem);
  }


  cardSelectionFn(cardId) {
    this.router.navigate(['/home', cardId], { state: { data: this.returnedArray } });
  }
}
