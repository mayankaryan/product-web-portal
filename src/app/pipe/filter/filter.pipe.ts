import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, price: string, rating: string, delivery: string): any {
    // console.log('pipe' + price);
    if( !price && !rating && !delivery) return value;

    if(price === 'highTolow'){
      value.sort((prod1: any, prod2: any) => {
        return prod2.price - prod1.price;
      })
    }
    else {
      value.sort((prod1: any, prod2: any) => {
        return prod1.price - prod2.price;
      })
    }

    if(rating == 'highTolow') {
      value.sort((prod1: any, prod2: any) => {
        return prod2.rating - prod1.rating;
      })
    }
    else {
      value.sort((prod1: any, prod2: any) => {
        return prod1.rating - prod2.rating;
      })
    }

    if(delivery == 'latestOrder') {
      value.sort((prod1: any, prod2: any) => {
        return prod2.delivery_days - prod1.delivery_days;
      })
    }
    else {
      value.sort((prod1: any, prod2: any) => {
        return prod1.delivery_days - prod2.delivery_days;
      })
    } 
    
    
    return value;
  }

}
