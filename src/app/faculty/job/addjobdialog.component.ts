import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Job } from '../../components/interfaces/job.component';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { UserService } from '../../servcies/user.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Validators } from '@angular/forms';
import { getDate } from 'date-fns';
import { Term } from '../../components/interfaces/term.component';
import { AuthService } from '../../servcies/auth.service';
import { DatePipe } from '@angular/common';
import { MatTable, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'job-data',
  templateUrl: 'addjobdialog.component.html',
  styleUrls: ['addjobdialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'modal-new'
  }
})
export class AddJobDialogContent extends DialogComponent<Job, boolean> implements Job, OnInit {
  loading: boolean = false;
  datasource = new MatTableDataSource([]);
  _id: string;
  title: string;
  description: string;
  deadline: Date = new Date(Date.now());
  startdate: Date = new Date(Date.now());
  enddate: Date = new Date(Date.now());
  wage: Number;
  hrsperweek: Number;
  resources: Number;
  funding: string;
  positionfor: string;
  facultycomment: string;
  admincomment: string;
  status: string;
  term: string;
  user: string;
  createdat: Date;
  updatedat: Date;
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: frLocale,
    minDate: this.deadline, // Minimal selectable date
    maxDate: new Date(Date.parse(this.deadline.setDate(this.deadline.getDate() + 1).toLocaleString()))  // Maximal selectable date
  };
  validTerms = [];
  displayedColumns = ['name', 'status', 'from', 'to', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(dialogService: DialogService, private userService: UserService, private authService: AuthService) {
    super(dialogService);
  }
  confirm() {

  }
  ngOnInit() {
    this.loading = true;
    this.userService.getValidTerms().subscribe(val => {
      this.loading = false;
      console.log(val);
      this.datasource.data = val;
      this.validTerms = val;

    }, err => {
      this.loading = false;
      this.authService.reset();
    });
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
}