import { Pipe, PipeTransform } from '@angular/core';
import { SideMenuItem } from '../services/side-menu-item.service';

@Pipe({
  name: 'localizationLabel'
})
export class LocalizationLabelPipe implements PipeTransform {

  transform(lang: string, item: SideMenuItem): string {
    return lang === 'en' ? item.label : item.label_cz;
  }

}
