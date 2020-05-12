import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl{
    setValue(value: string, options: any){
        const length = value?.length;
        const fLength = this.value?.length;
        const optionsWithEmit = {...options, emitModelToViewChange: true};
        if (value?.match(/[^0-9|\/]/gi)){
            super.setValue(this.value, optionsWithEmit);
            return;
        }
        if (length === 2 && fLength === 3){
            const newValue = value.substring(0, value.length - 1);
            super.setValue(newValue, optionsWithEmit);
            return;
        }
        if (length === 2){
            super.setValue(value + '/', optionsWithEmit);
            return;
        }
        if (length > 5){
            super.setValue(this.value, optionsWithEmit);
            return;
        }
        super.setValue(value, optionsWithEmit);
    }
}
