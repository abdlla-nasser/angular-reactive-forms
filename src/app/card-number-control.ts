import { FormControl } from '@angular/forms';

export class CardNumberControl extends FormControl{
    setValue(value: string, options: any){
        const length = value?.length;
        const fLength = this.value?.length;
        const optionsWithEmit = {...options, emitModelToViewChange: true};
        if (value?.match(/[^0-9|\-]/gi)){
            super.setValue(this.value, optionsWithEmit);
            return;
        }
        if ((length === 4 && fLength === 5) || (length === 9 && fLength === 10) || (length === 14 && fLength === 15)){
            const newValue = value.substring(0, value.length - 1);
            super.setValue(newValue, optionsWithEmit);
            return;
        }
        if (length === 4 || length === 9 || length === 14){
            super.setValue(value + '-', optionsWithEmit);
            return;
        }
        if (length > 19){
            super.setValue(this.value, optionsWithEmit);
            return;
        }
        super.setValue(value, optionsWithEmit);
    }
}
