import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  totalItems: number = 20;
  currentPage: number = 1;
  smallnumPages: number = 0;
  encapsulation: ViewEncapsulation.None;
  members =[];
  returnedArray=[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.members = [
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here1', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here2', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here3', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here4', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here5', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here6', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here7', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here8', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here9', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here10', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here11', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here12', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here13', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here14', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here15', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here16', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here17', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here15', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here16', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here17', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { title: 'Title', subtitle: 'Subtitle', content: 'Content here18', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },

    { title: 'Title', subtitle: 'Subtitle', content: 'Content here18', url: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
  ];
  this.returnedArray = this.members.slice(0, 3);
}


  pageChanged(event: any): void {

    console.log('Page changed to: ' + event.page);
    this.currentPage = event.page;
    console.log('Number items per page: ' + event.itemsPerPage);
    
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.members.slice(startItem, endItem);
  }


  cardSelectionFn(cardId){
    // this.router.navigateByUrl
    this.router.navigate(['/shop']);
  }

}
