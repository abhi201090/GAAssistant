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
  templateUrl: 'deletetermdialog.component.html',
  styleUrls: ['deletetermdialog.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'modal-new'
  }
})
export class DeleteTermDialog extends DialogComponent<Term, boolean> implements Term, OnInit {
  public loading:boolean = false;
  _id: string;
  name: string;
  status: string;
  from: Date;
  to: Date;
  type: string;
  created_at: Date;
  updated_at: Date;
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
    this.userService.deleteTerm(data).subscribe(()=>{
      this.loading = false;
    }, err=>{
      this.loading = false;
      if(err.error === 'Unauthorized')
        location.replace('/login');
    });;
    this.result = true;
    this.close();
  }

  ngOnInit() {
  }
}