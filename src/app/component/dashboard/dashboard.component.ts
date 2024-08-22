import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList !: any;

  constructor( private httpService: HttpService) {}

  ngOnInit(): void {
    //-------- getting the product details from json server
    this.httpService.getProductDetails().subscribe({
      next: (res: any) => {
        this.productList = res;
      }
    })
  }
}
