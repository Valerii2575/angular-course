import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'sort',
  pure:  false
})
export class SortPipe implements PipeTransform {

  transform(value: Product[], args: keyof Product = 'title'): Product[] {
    if(value){
      return value.sort((a: Product, b: Product) => {
        if(a[args] < b[args]){
          return -1;
        }
        else if(b[args] < a[args])
          return 1;
        return 0;
      })

    }
    return [];
  }

}


// value - the import data that we want to transafom
// args - an optional list of arguments we can provide to the transformation method
//  we can pass additional parameters to the pipe

// transform(value: Product[], ...args: unknown[]): Product[] {
//     if(value){
//       return value.sort((a: Product, b: Product) => {
//         if(a.title < b.title){
//           return -1;
//         }
//         else if(b.title < a.title)
//           return 1;
//         return 0;
//       })

//     }
//     return [];
//   }
