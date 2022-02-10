import { CountryRegisterComponent } from './../country-register/country-register.component';
import { CountryService } from './../country.service';
import { Pais } from './../../shared/models/Pais';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit, AfterViewInit {
  listCountries: MatTableDataSource<Pais>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'gentilico', 'nome', 'sigla', 'actions'];

  constructor(
    private countryService: CountryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.countryService.getCountries().subscribe((resp: Pais[]) => {
      this.listCountries = new MatTableDataSource(resp);
      this.listCountries.paginator = this.paginator;
      this.listCountries.sort = this.sort;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CountryRegisterComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.ngAfterViewInit();
    });
  }

  delete(id: number): void {
    this.countryService.deleteCountry(id).subscribe((resp) => {
      this.ngAfterViewInit();
    });
  }
}
