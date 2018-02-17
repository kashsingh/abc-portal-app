import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, FormGroup, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[marks-validate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MarksValidatorDirective, multi: true}]
})
export class MarksValidatorDirective implements Validator {

  validate(mark: AbstractControl): ValidationErrors {
    const num = Number(mark.value);   
    const isValid = !isNaN(num) && num >= 0 && num <= 100;   
    const message = {
      'marks': {
        'message': 'Marks must be in range(0,100).' 
        // Will changes the error defined in errors helper.
      }
    };
    return isValid ? null : message;
  }

}
