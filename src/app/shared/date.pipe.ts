import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'datene'
})
export class DatePipe implements PipeTransform {

    transform(value: any): any {
        let date = moment(value).format('MMM DD, YYYY');
        return date;
    }

}
