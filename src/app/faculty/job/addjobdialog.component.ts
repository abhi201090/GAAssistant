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
  templateUrl: 'addjobdialog.component.html',
  styleUrls: ['addjobdialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'modal-new'
  }
})
export class AddJobDialogContent extends DialogComponent<Job, boolean> implements Job, OnInit {
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
  validTerms = [];
  selectedterm: string;
  dateerrors: any = { isError: true, errorMessages: [] };
  minmaxerrors: any = { isError: false, errorMessages: [] };
  termerror: any = { isError: true, errorMessage: 'Term is required' };

  constructor(dialogService: DialogService, private userService: UserService, private authService: AuthService) {
    super(dialogService);
    this.deadline = new Date(new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 1));
    this.startdate = new Date(new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 2));
    this.enddate = new Date(new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 3));
  }

  onTermSelect(data) {
    this.selectedterm = data._id;
    this.term = data;
    this.termerror.isError = false;
    this.termerror.errorMessage = '';
    this.compareDate();
  }

  minmaxValidation() {
    this.minmaxerrors.isError = false;
    this.minmaxerrors.errorMessages = [];
    if (this.wage && (this.wage < 10 || this.wage > 15)) {
      this.minmaxerrors.isError = true;
      this.minmaxerrors.errorMessages.push('Wage must be between 10 and 15');
    }
    if (this.hrsperweek && (this.hrsperweek > 20 || this.hrsperweek < 1)) {
      this.minmaxerrors.isError = true;
      this.minmaxerrors.errorMessages.push('Hours per week must be between 1 and 20');
    }
    if (this.resources && this.resources < 1) {
      this.minmaxerrors.isError = true;
      this.minmaxerrors.errorMessages.push('Minimum resources is 1');
    }
  }

  compareDate() {
    let current = new Date(Date.now());
    let termStart = new Date(this.term.from);
    let termEnd = new Date(this.term.to);
    this.dateerrors.isError = false;
    this.dateerrors.errorMessages = [];
    if (this.term) {
      if (Date.parse(this.deadline.toDateString()) <= Date.parse(current.toDateString())) {
        this.dateerrors.isError = true;
        this.dateerrors.errorMessages.push('Deadline must be greater than current date');
      }
      if (Date.parse(this.deadline.toDateString()) >= Date.parse(this.startdate.toDateString())) {
        this.dateerrors.isError = true;
        this.dateerrors.errorMessages.push('Deadline must be less than start date');
      }
      if (Date.parse(this.deadline.toDateString()) >= Date.parse(this.enddate.toDateString())) {
        this.dateerrors.isError = true;
        this.dateerrors.errorMessages.push('Deadline must be less than end date');
      }
      if (Date.parse(this.deadline.toDateString()) >= Date.parse(termEnd.toDateString())) {
        this.dateerrors.isError = true;
        this.dateerrors.errorMessages.push('Deadline must be less than term end date');
      }
      if (Date.parse(this.startdate.toDateString()) < Date.parse(termStart.toDateString()) || Date.parse(this.startdate.toDateString()) >= Date.parse(termEnd.toDateString())) {
        this.dateerrors.isError = true;
        this.dateerrors.errorMessages.push('Start date must be between than term start date and end date');
      }
      if (Date.parse(this.enddate.toDateString()) <= Date.parse(this.startdate.toDateString())) {
        this.dateerrors.isError = true;
        this.dateerrors.errorMessages.push('End date must be greater than start date');
      }
      if (Date.parse(this.enddate.toDateString()) > Date.parse(termEnd.toDateString())) {
        this.dateerrors.isError = true;
        this.dateerrors.errorMessages.push('End date must be less than or equal to term end date');
      }
    }

  }
  confirm() {
    this.loading = true;
    if (this.funding == 'Self')
      this.status = 'Approved';
    else
      this.status = 'Pending';
    var data = {
      _id: null,
      title: this.title,
      description: this.description,
      requirements: this.requirements,
      deadline: this.deadline,
      startdate: this.startdate,
      enddate: this.enddate,
      wage: this.wage,
      hrsperweek: this.hrsperweek,
      resources: this.resources,
      funding: this.funding,
      positionfor: this.positionfor,
      facultycomment: this.facultycomment,
      admincomment: this.admincomment,
      status: this.status,
      term: this.term,
      user: this.user,
      createdat: new Date(Date.now()),
      updatedat: new Date(Date.now())
    }
    this.userService.addJob(data).subscribe(() => {
      this.loading = false;
    });
    this.result = true;
    this.close();
  }
  ngOnInit() {
    this.loading = true;
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