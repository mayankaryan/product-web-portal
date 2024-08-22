import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { } 

  //--------- Search product observable and subject
  src_qry = new Subject<any> ();
  src_qry$ = this.src_qry.asObservable();

  //-------- Search query function to share the input of search bar to dashboard component
  sendSearchQuery(searchQuery: string) {
    this.src_qry.next(searchQuery);
  }
}
