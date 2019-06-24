import { Component, OnInit, Input, ViewChild, OnChanges, ChangeDetectorRef, Output } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { BusLine } from '../../../models/BusLine';
import { MatPaginator } from '@angular/material/paginator';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-existing-lines',
  templateUrl: './existing-lines.component.html',
  styleUrls: ['./existing-lines.component.css']
})
export class ExistingLinesComponent implements OnInit, OnChanges {

  @Input() companyLines: BusLine[];
  @Input() actionText:string;
  displayedColumns: string[] = ['startPoint', 'endPoint', 'stops', 'duration', 'price', 'distance','action'];
  dataSource = new MatTableDataSource<BusLine>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Output() tableActionClicked: EventEmitter<any> = new EventEmitter();
  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.actionText)
  }

  ngOnChanges() {
    this.dataSource.data = this.companyLines;
    console.log('on changes');
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  emitEvent(element:any) {
    this.tableActionClicked.emit(element);
  }
}
