import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { } 

  src_qry = new Subject<any> ();
  src_qry$ = this.src_qry.asObservable();

  sendSearchQuery(searchQuery: string) {
    this.src_qry.next(searchQuery);
  }
}
