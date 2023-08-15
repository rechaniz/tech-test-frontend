import {AbstractControl, ValidatorFn} from "@angular/forms";

export const WeightAndQuantityValidator : ValidatorFn = (control: AbstractControl) => {
  const quantity = control.get('quantity')?.value
  const totalQuantity = control.get('totalQuantity')?.value
  const weight = control.get('weight')?.value
  const totalWeight = control.get('totalWeight')?.value

  if (quantity && totalQuantity) {
    if (quantity > totalQuantity) {
      control.get('quantity')?.setErrors({quantityGreaterThanTotalQuantity: true})
      control.get('totalQuantity')?.setErrors({quantityGreaterThanTotalQuantity: true})
    } else {
      control.get('quantity')?.setErrors(null)
    }
  }
  if (weight && totalWeight) {
    if (weight > totalWeight) {
      control.get('weight')?.setErrors({weightGreaterThanTotalWeight: true})
      control.get('totalWeight')?.setErrors({weightGreaterThanTotalWeight: true})
    } else {
      control.get('weight')?.setErrors(null)
    }
  }
  return null
}
