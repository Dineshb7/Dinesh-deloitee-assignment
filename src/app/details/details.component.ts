import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppserviceService } from '../appservice.service';

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
    private service: AppserviceService) { }

  ngOnInit(): void {

    this.cardsListData = history.state.data;
    this.selectedCardId = this.activatedRoute.snapshot.params['id'];
    (!this.cardsListData) ? this.service.getmemberData().subscribe(cardsJSONDeatils => {
      this.cardsListData = cardsJSONDeatils;
      this.selectedCardData = this.cardsListData && this.cardsListData.find(cardData => cardData.id == this.selectedCardId);
    }) : this.cardsListData = history.state.data;

    this.selectedCardData = this.cardsListData && this.cardsListData.find(cardData => cardData.id == this.selectedCardId);
  };


}
