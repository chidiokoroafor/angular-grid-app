import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent, IgxGridComponent, Transaction } from 'igniteui-angular';
import { generateRandomInteger } from '../../data/utils';
import { DATA } from '../../data/nwindData';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrl: './editing.component.scss'
})
export class EditingComponent implements OnInit {

  @ViewChild('grid', { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
  @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;

  public data: any[];
  public transactionsData: Transaction[];
  private addProductId: number;

  ngOnInit(): void {
    this.data = DATA;
    this.addProductId = this.data.length + 1;
  }

  public addRow() {
    this.grid.addRow({
        CategoryID: generateRandomInteger(1, 10),
        Discontinued: generateRandomInteger(1, 10) % 2 === 0,
        OrderDate: new Date(generateRandomInteger(2000, 2050),
        generateRandomInteger(0, 11), generateRandomInteger(1, 25))
        .toISOString().slice(0, 10),
        ProductID: this.addProductId++,
        ProductName: 'Product with index ' + generateRandomInteger(0, 20),
        QuantityPerUnit: (generateRandomInteger(1, 10) * 10).toString() + ' pcs.',
        ReorderLevel: generateRandomInteger(10, 20),
        SupplierID: generateRandomInteger(1, 20),
        UnitPrice: generateRandomInteger(10, 1000),
        UnitsInStock: generateRandomInteger(1, 100),
        UnitsOnOrder: generateRandomInteger(1, 20)
    });
}

public deleteRow(id:any) {
    this.grid.deleteRow(id);
}

public undo() {
    /* exit edit mode and commit changes */
    this.grid.endEdit(true);
    this.grid.transactions.undo();
}

public redo() {
    /* exit edit mode and commit changes */
    this.grid.endEdit(true);
    this.grid.transactions.redo();
}

public openCommitDialog() {
    this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
    this.dialog.open();
}

public commit() {
    this.grid.transactions.commit(this.data);
    this.dialog.close();
}

public discard() {
    this.grid.transactions.clear();
    this.dialog.close();
}

public stateFormatter(value: any) {
    return JSON.stringify(value);
}

public typeFormatter(value: string) {
    return value.toUpperCase();
}

public classFromType(type: string): string {
    return `transaction--${type.toLowerCase()}`;
}

}
