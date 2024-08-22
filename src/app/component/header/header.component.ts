import { Component } from '@angular/core';
import { SearchService } from 'src/app/service/user/search.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery: string = "";

  constructor(private searchService: SearchService) {}

  searchProduct() {
    this.searchService.sendSearchQuery(this.searchQuery);
  }

}
