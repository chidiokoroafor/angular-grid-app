import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxStringFilteringOperand } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.scss'
})
export class FilteringComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;

  public data: any[];

  ngOnInit(): void {
    this.data = DATA
  }

 public filter(target: EventTarget) {
    this.grid1.filter('ProductName', (target as HTMLInputElement).value, IgxStringFilteringOperand.instance().condition('contains'));
}

public formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
}

public formatCurrency(val: string) {
    return parseInt(val, 10).toFixed(2);
}

}
