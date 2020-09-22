import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Observable } from 'rxjs';
import { AppserviceService } from '../appservice.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentRate = 2;
  totalItems = 20;
  currentPage = 1;
  smallnumPages = 0;
  encapsulation: ViewEncapsulation.None;
  members: any = [];
  returnedArray = [];
  searchFilterArray: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: AppserviceService,
    private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    this.members = [];
    this.spinner.show();
    this.service.getmemberData().subscribe((JSONdata) => {
      this.spinner.hide();
      this.members = JSONdata;
      this.service.updateSearchedTextValue.subscribe((updatedText) => {
        this.searchFilterArray = this.members && this.members.filter(
          member => member.productOf.trim().toLowerCase().includes(updatedText.trim().toLowerCase()));
        (this.searchFilterArray && this.searchFilterArray.length > 0) ? this.members = this.searchFilterArray : this.members = JSONdata;
        this.returnedArray = this.members.slice(0, 6);
      });
    },
      (err) => {
        this.spinner.hide();
        console.log('Service Failed', err);
      });
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.members.slice(startItem, endItem);
  }


  cardSelectionFn(cardId: any): void{
    console.log('retuuuuu', this.returnedArray);
    this.router.navigate(['/home', cardId], { state: { data: this.returnedArray } });
  }
}
