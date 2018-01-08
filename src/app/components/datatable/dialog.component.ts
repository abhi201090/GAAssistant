import {Component, ViewEncapsulation} from '@angular/core';
import {DialogComponent, DialogService} from 'ng2-bootstrap-modal';
import { SampleModel } from 'app/components/datatable/sampleModel';

@Component({
    selector: 'dialog-data',
    templateUrl: 'dialog.component.html',
    styleUrls:['dialog.component.css'],
    encapsulation: ViewEncapsulation.None,
    host:{
        'class':'modal-new'
    }
  })
  export class DialogContent extends DialogComponent<SampleModel,boolean> implements SampleModel{
    name: string;
    email: string;
    jobTitle: string;
    active: boolean;
    phoneNumber: string;
    date: string;
    constructor(dialogService: DialogService) {
        super(dialogService);
      }
      confirm() {
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        this.result = true;
        this.close();
      }
  }