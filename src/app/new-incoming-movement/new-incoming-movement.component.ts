import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MovementsService} from "../movements.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {refTypes} from '../data/ref-types';
import {warehouses} from '../data/warehouses';
import {customsStatuses} from "../data/customs-statuses";
import {
  WeightAndQuantityValidator,
} from "../weight-and-quantity-validator.directive";
import {Movement} from "../data/movement";

@Component({
  selector: 'app-new-incoming-movement',
  templateUrl: './new-incoming-movement.component.html',
  styleUrls: ['./new-incoming-movement.component.css']
})
export class NewIncomingMovementComponent {
  constructor(private readonly formBuilder: FormBuilder,
              private readonly movementsService: MovementsService,
              private _snackBar: MatSnackBar) {
  }

  movementForm = this.formBuilder.group({
    movementId: new FormControl('', Validators.required),
    movementTime: new FormControl(new Date(Date.now()), Validators.required),
    warehouse: new FormControl('', Validators.required),
    refType: new FormControl('', Validators.required),
    refValue: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
    customsStatus: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    totalQuantity: new FormControl('', [Validators.required, Validators.min(0)]),
    weight: new FormControl('', [Validators.required, Validators.min(0)]),
    totalWeight: new FormControl('', [Validators.required, Validators.min(0)]),
    goodsLabel: new FormControl('', Validators.required)
  }, {validators: WeightAndQuantityValidator})


  onCancel(): void {
    this.movementForm.reset()
  }

  onSubmit(): void {
    const newMovement = this.formatIncomingMovement(this.movementForm.value);
    this.movementsService.sendNewMovement(newMovement).subscribe({
        next: (data) => {
          this._snackBar.open('Entrée déclarée', 'Fermer')
          this.movementForm.reset()
        },
        error: (error) => {
          this._snackBar.open('Erreur lors de la création du mouvement', 'Fermer')
        }
      }
    )
  }


  protected readonly warehouses = warehouses;
  protected readonly refTypes = refTypes;
  protected readonly customsStatuses = customsStatuses;

  private formatIncomingMovement(data: any): Movement {
    return {
      id: data.movementId,
      declarationTime: new Date(Date.now()).toISOString().replace(/\.\d+/, ""),
      movementTime: data.movementTime.toISOString().replace(/\.\d+/, ""),
      type: "ENTREE",
      declaredBy: "Romain Echaniz",
      product: {
        refType: data.refType,
        refNumber: data.refValue,
        description: data.goodsLabel,
        quantity: data.quantity,
        weight: data.weight,
        totalQuantity: data.totalQuantity,
        totalWeight: data.totalWeight
      },
      customsStatus: data.customsStatus,
      goingToCode: 'CDGRC1',
      goingToLabel: 'RapidCargo CDG',
      comingFromCode: data.warehouse.code,
      comingFromLabel: data.warehouse.label,
      customsDocumentType: null,
      customsDocumentRef: null
    }
  }

}
