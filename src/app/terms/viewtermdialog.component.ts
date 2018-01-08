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
    selector: 'viewterm',
    templateUrl: 'viewtermdialog.component.html',
    styleUrls: ['viewtermdialog.component.css'],
    encapsulation: ViewEncapsulation.None,
    host: {
        'class': 'modal-new'
    }
})
export class ViewTermDialog extends DialogComponent<Term, boolean> implements Term, OnInit {
    _id: string;
    name: string;
    status: string ;
    from: Date;
    to: Date;
    type: string;
    created_at: Date;
    updated_at: Date;

    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    ngOnInit() {

    }

}