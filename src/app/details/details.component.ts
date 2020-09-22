import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppserviceService } from '../appservice.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectedCardDetail: Observable<any>;
  private subscription: Map<string, Subscription> = new Map();
  selectedCardId: Number
  cardsListData: any;
  selectedCardData: any;
  selectedCardInputData: any

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: AppserviceService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    this.cardsListData = history.state.data;
    console.log("gghsfhhj",this.cardsListData)
    this.selectedCardId = this.activatedRoute.snapshot.params['id'];
      if(! this.cardsListData){
        this.service.getmemberData().subscribe(
          (cardsJSONDeatils) => {
            this.spinner.hide();
            this.cardsListData = cardsJSONDeatils;
            this.selectedCardData = this.cardsListData && this.cardsListData.filter(cardData => cardData.id == this.selectedCardId);
          },(err) => {
            this.spinner.hide();
            console.log("Service Failed", err)
          })
      }
      else {
        this.cardsListData = history.state.data
        console.log("hjhkjhkjhjjk",this.cardsListData) ;
      }
    this.selectedCardData = this.cardsListData && this.cardsListData.filter(cardData => cardData.id == this.selectedCardId)
    this.selectedCardData ? this.spinner.hide(): this.spinner.show();
  };
}
