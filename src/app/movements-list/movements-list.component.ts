import { Component } from '@angular/core';
import {MovementsService} from "../movements.service";
import {Movement} from "../data/movement";

@Component({
  selector: 'app-movements-list',
  templateUrl: './movements-list.component.html',
  styleUrls: ['./movements-list.component.css']
})
export class MovementsListComponent {
  constructor(private movementsService: MovementsService) {
  }

  movements: Movement[] = []
  columnsToDisplay = ['date', 'type', 'from', 'to', 'reference', 'quantity', 'weight', 'customsStatus']

  ngOnInit(): void {
    this.movementsService.getPosts().subscribe((data) => {
      this.movements = data
      console.log(data)
    })
  }

}
