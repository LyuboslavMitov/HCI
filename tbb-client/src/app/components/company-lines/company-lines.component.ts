import { Component, OnInit } from '@angular/core';
import { BusLine } from '../../models/BusLine';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { CompanyService } from '../../services/company.service';



@Component({
  selector: 'app-company-lines',
  templateUrl: './company-lines.component.html',
  styleUrls: ['./company-lines.component.css']
})
export class CompanyLinesComponent implements OnInit {
  companyLines: BusLine[];

  newLine: BusLine;
  buttonText:string = "Remove line";

  newLineForm = new FormGroup({
    startPoint: new FormControl(''),
    endPoint: new FormControl(''),
    stops: new FormControl(''),
    duration: new FormControl(''),
    price: new FormControl(''),
    distance: new FormControl('')
  });
  constructor(private service: CompanyService) { }

  ngOnInit() {
    this.getLines();
  }

  onFormSubmit(value: BusLine): void {
    this.service.addLine(value);
    this.getLines();
    // this.companyLines.push(value);
    this.companyLines = this.companyLines.slice();
    console.log(this.companyLines)
  }

  private getLines() {
    this.service.getLines().subscribe(res => {
      this.companyLines = res;
    });
  }
  deleteLine(event:any) {
    this.service.removeLine(event as BusLine);
    this.getLines();
    this.companyLines = this.companyLines.slice();
  }
}
