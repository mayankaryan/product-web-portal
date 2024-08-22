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

  //----- Sending the input of search bar to Search Service, which is then transferred to dashboard component
  searchProduct() {
    this.searchService.sendSearchQuery(this.searchQuery);
  }

}
