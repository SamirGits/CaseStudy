import { Pipe, PipeTransform } from '@angular/core';
import { isNull } from 'util';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'blank'
})
export class BlankPipe implements PipeTransform {

  transform(originalValue :BlankPipe):String{
    
    if(originalValue==null)
    return 'No data Avaialable';
    else
    return 'originalValue';
    

    
  }

}
