import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  /** 
   * @param: value, price, rating, delivery
   * @returns: value 
   */
  transform(value: any, price: string, rating: string, delivery: string): any {
    // console.log('pipe' + price);
    if( !price && !rating && !delivery) return value;

   
    if(price === 'highTolow'){                       //------- filter login based on Price
      value.sort((prod1: any, prod2: any) => {
        return prod2.price - prod1.price;
      })
    }
    else if(price == 'lowTohigh'){
      value.sort((prod1: any, prod2: any) => {
        return prod1.price - prod2.price;
      })
    }

    if(rating == 'highTolow') {                    //------- filter login based on Rating
      value.sort((prod1: any, prod2: any) => {
        return prod2.rating - prod1.rating;
      })
    }
    else if(rating == 'lowTohigh') {
      value.sort((prod1: any, prod2: any) => {
        return prod1.rating - prod2.rating;
      })
    }

    
    if(delivery == 'latestOrder') {              //------- filter login based on Delivery day
      value.sort((prod1: any, prod2: any) => {
        return prod2.delivery_days - prod1.delivery_days;
      })
    }
    else if(delivery == 'deliverySoon') {
      value.sort((prod1: any, prod2: any) => {
        return prod1.delivery_days - prod2.delivery_days;
      })
    } 
    
    return value;
  }

}
