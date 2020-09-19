import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  selectedCardDetail: Observable<any>;
  private subscription: Map<string, Subscription> = new Map();
  selectedCardId: any

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service:AppserviceService) { }

  ngOnInit(): void {

    console.log("shop onit")
    const activatedRouteSubscription = this.activatedRoute.data.subscribe(route => {
      console.log("activatedRoute route", route);
      // route = {"employeeInfo":[{"peopleGuid":"fbf51a43-eb6b-410c-80e0-91065d87c7ed","empUniqueId":1223592,"reportsToGuid":"1ff93f9c-31e1-4ec4-a103-ae2de3d0ad91","managerFirstName":"Payroll Admin","managerLastName":"","managerMiddleName":null,"employeeFirstName":"Robert","employeeLastName":"Oppenheimer","employeeMiddleName":null},false]};
      // this.employeeInfo = route.employeeInfo[0];
      // this.employeeInfo.IsloggedinUserMgr = false;//route.employeeInfo[1];
      // this.eventSrv.employeeInfo = this.employeeInfo;
    })

    // this.selectedCardDetail = this.activatedRoute.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedCardId = Number(params.get('id'));
    //     return this.service.getHeroes();
    //   })
    // );

    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedCardId = Number(params.get('id'));
      // this.selectedCardDetail = this.activatedRoute.paramMap.pipe(
        //   switchMap(params => {
        //     this.selectedCardId = Number(params.get('id'));
        //     return this.service.getHeroes();
        //   })
        // );

        console.log("insideactivatedroute")
        this.service.getUserData().subscribe(data=>{
          console.log(data)
        })
        // let products=this._productService.getProducts();
        // this.product=products.find(p => p.productID==this.id); 
    });

    this.subscription.set('activatedRouteSubscription', activatedRouteSubscription);
  }

}
