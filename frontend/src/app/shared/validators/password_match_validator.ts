import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const PasswordMatchValidator = (passwordControlName: string, confirmPasswordControlName: string) => {
  const validator= (form: AbstractControl)=> {
    const passwordControl = form.get(passwordControlName);
    const confirmPasswordControl = form.get(confirmPasswordControlName);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ notMatch: true });
    } else {
      const errors=confirmPasswordControl.errors;
      if(!errors){
        return;
      }
     delete errors.notMatch;
     confirmPasswordControl.setErrors(errors);
    }

    return null; // Return null to indicate no errors found on the form group itself
  };
  return validator;
};
