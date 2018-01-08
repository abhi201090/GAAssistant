import {Component, ViewChild, ViewEncapsulation,Inject} from '@angular/core';
import {sdata} from './sampledata';
import {MatTable, MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import { SampleModel } from 'app/components/datatable/sampleModel';
import {UserService} from '../../servcies/user.service';
import {DialogContent} from './dialog.component';
import {DialogService} from 'ng2-bootstrap-modal';

@Component({
    selector: 'data-table-grid',
    providers:[],
    templateUrl: './datatable.component.html',
    styleUrls:['./datatable.component.css'],
    encapsulation: ViewEncapsulation.None,
    host:{
        'class':'new-mat-paginator'
    }
})

export class DataTableComponent {
    displayedColumns = ['name','email','jobTitle','active','phoneNumber','date','action'];
    ndata = new MatTableDataSource<SampleModel>(sdata);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private dialogService:DialogService, private userService:UserService){
        
    }

    applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.ndata.filter = filterValue;
    }

    opendialog(data){
        
            let disposable = this.dialogService.addDialog(DialogContent, data)
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                        alert('accepted');
                    }
                    else {
                        alert('declined');
                    }
                });
        }
    

  ngAfterViewInit() {
      this.ndata.paginator = this.paginator;
      this.ndata.sort = this.sort;
    }
}


  
