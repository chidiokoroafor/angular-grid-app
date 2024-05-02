import { Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, ISortingOptions, IgxGridComponent, SortingDirection } from 'igniteui-angular';
import { DATA } from '../../data/localData';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.scss'
})
export class SortingComponent implements OnInit {
 
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;
  public data: any[];
  public sortingTypes: ISortingOptions[] = [
      {
          mode: 'single'
      }, {
          mode: 'multiple'
      }
  ];
  public sortingOptions: ISortingOptions = this.sortingTypes[1];

  ngOnInit(): void {
    this.data = DATA
  }

  public ngAfterViewInit(): void {
    this.grid1.sortingExpressions = [
        {
            dir: SortingDirection.Asc, fieldName: 'CategoryName',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance()
        }
    ];
}

public formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
}

handleSearchResults(event: KeyboardEvent) {
    event.preventDefault();
}

}
