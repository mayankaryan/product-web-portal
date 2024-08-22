import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchQuery: string): any {
    if( !searchQuery ) return value;

    searchQuery = searchQuery.toLowerCase();
    return value.filter((item: any) => {
      return item.name.toLowerCase().includes(searchQuery)|| item.description.toLowerCase().includes(searchQuery);
    })
  }

}
