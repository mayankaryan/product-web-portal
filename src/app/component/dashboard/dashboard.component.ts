import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http/http.service';
import { SearchService } from 'src/app/service/user/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList !: any;
  searchQuery : string = "";

  constructor( private httpService: HttpService, private searchService: SearchService) {}

  ngOnInit(): void {
    //-------- getting the product details from json server
    this.httpService.getProductDetails().subscribe({
      next: (res: any) => {
        this.productList = res;
      }
    })

    //-------- sharing searched query of header's search bar to search pipe
    this.searchService.src_qry$.subscribe({
      next: (res:string) => {
        this.searchQuery = res;
      }
    })
  }
}
