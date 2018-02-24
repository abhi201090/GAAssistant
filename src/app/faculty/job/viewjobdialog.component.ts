import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Job } from '../../components/interfaces/job.component';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { UserInfo } from '../../components/interfaces/user.component';
import { UserService } from '../../servcies/user.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Validators } from '@angular/forms';
import { getDate } from 'date-fns';
import { Term } from '../../components/interfaces/term.component';
import { AuthService } from '../../servcies/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'job-data',
  templateUrl: 'viewjobdialog.component.html',
  styleUrls: ['viewjobdialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'modal-new'
  }
})
export class ViewJobDialogContent extends DialogComponent<Job, boolean> implements Job, OnInit {
  loading: boolean = false;
  _id: string;
  title: string;
  description: string;
  requirements: string;
  deadline: Date;
  startdate: Date;
  enddate: Date;
  wage: Number;
  hrsperweek: Number;
  resources: Number;
  funding: string;
  positionfor: string;
  facultycomment: string;
  admincomment: string;
  status: string;
  term: Term;
  user: UserInfo;
  createdat: Date;
  updatedat: Date;
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: frLocale,
    minDate: new Date(Date.now()), // Minimal selectable date
    maxDate: new Date(Date.now())  // Maximal selectable date
  };
  selectedterm:string;
  validTerms = [];


  constructor(dialogService: DialogService, private userService: UserService, private authService: AuthService) {
    super(dialogService);
  }
 
  ngOnInit() {
    this.loading = true;
    this.selectedterm = this.term._id;
    this.userService.getValidTerms().subscribe(val => {
      this.loading = false;
      this.validTerms = val;

    }, err => {
      this.loading = false;
      this.result = true;
      this.close();
      this.authService.reset();
    });
    this.authService.getUserDetails().subscribe(val => {
      this.user = val;
    });
  }
}