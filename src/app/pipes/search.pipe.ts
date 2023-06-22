import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arreglo: any, title: any): any {
    return arreglo.filter((e:string)=>e.includes(title))
  }

}
