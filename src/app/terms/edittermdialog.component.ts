import { Component, ViewEncapsulation } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Term } from '../components/interfaces/term.component';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { UserService } from '../servcies/user.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Validators } from '@angular/forms';
import { getDate } from 'date-fns';

@Component({
  selector: 'term-data',
  templateUrl: 'addtermdialog.component.html',
  styleUrls: ['addtermdialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'modal-new'
  }
})
export class EditTermDialog extends DialogComponent<Term, boolean> implements Term, OnInit {
  public loading:boolean = false;
  _id: string;
  name: string;
  status: string;
  from: Date;
  to: Date;
  type: string;
  created_at: Date;
  updated_at: Date;
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: frLocale
  };
  error:any={isError:false,errorMessage:''};
  constructor(dialogService: DialogService, private userService: UserService) {
    super(dialogService);
  }
  confirm() {
    this.loading = true;
    var data = {
      _id: this._id,
      name: this.name,
      status: this.status,
      from: this.from,
      to: this.to,
      type: this.type,
      created_at: this.created_at,
      updated_at: new Date(Date.now())
    };
    this.userService.updateTerm(data).subscribe(()=>{
      this.loading = false;
    }, err=>{
      this.loading = false;
      if(err.error === 'Unauthorized')
        location.replace('/login');
    });;
    this.result = true;
    this.close();
  }
  compareDate(){
    var current = new Date(Date.now());
    if(Date.parse(this.from.toDateString()) < Date.parse(current.toDateString())){
      this.error.isError = true;
      this.error.errorMessage = 'From date cannot be less than current date';
    }
    else{
      if(Date.parse(this.to.toDateString()) < Date.parse(this.from.toDateString())){
        this.error.errorMessage = '"To" date must be greater than "From" date';
        this.error.isError = true;
      }
      else{
        this.error.errorMessage = '';
        this.error.isError = false;
      }
    }
  }
  ngOnInit() {
  }
}