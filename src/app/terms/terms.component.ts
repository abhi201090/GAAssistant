import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTable, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AddTermDialogContent } from './addtermdialog.component';
import { ViewTermDialog } from './viewtermdialog.component';
import { EditTermDialog } from './edittermdialog.component';
import { DeleteTermDialog } from './deletetermdialog.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { UserService } from '../servcies/user.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servcies/auth.service';

@Component({
    selector: 'terms',
    templateUrl: './terms.component.html',
    styleUrls: ['./terms.component.css'],
    encapsulation: ViewEncapsulation.None,
    host: {
        'class': 'new-mat-paginator'
    }
})
export class ManageTerms {
    loading:boolean = false;
    datasource = new MatTableDataSource([]);
    terms;
    displayedColumns = ['name', 'status', 'from', 'to', 'type', 'action'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(private userService: UserService, private dialogService: DialogService, private authService:AuthService) {
        this.loading = true;
        this.userService.getTerms().subscribe(res => {
            this.datasource.data = res;
            this.loading = false;
        }, err => {
            this.authService.reset();
            this.loading = false;
           
        });
    }
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.datasource.filter = filterValue;
    }
    opendialog() {
        let disposable = this.dialogService.addDialog(AddTermDialogContent, {})
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    this.loading = true;
                    this.userService.getTerms().subscribe(res => {
                        this.datasource.data = res;
                        this.loading = false;
                    }, err => {
                        this.loading = false;
                        if (err.error === 'Unauthorized') {
                        }
                    });
                }
                else {
                    //alert('declined');
                }
            });
    }
    editterm(data) {

        let disposable = this.dialogService.addDialog(EditTermDialog, data)
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    this.loading = true;
                    this.userService.getTerms().subscribe(res => {
                        this.datasource.data = res;
                        this.loading = false;
                    }, err => {
                        this.loading = false;
                        if (err.error === 'Unauthorized') {
                        }
                    });
                }
                else {
                    //alert('declined');
                }
            });
    }
    viewterm(data) {
        let disposable = this.dialogService.addDialog(ViewTermDialog, data)
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    
                }
                else {
                    //alert('declined');
                }
            });
    }
    deleteterm(data) {
        let disposable = this.dialogService.addDialog(DeleteTermDialog, data)
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    this.loading = true;
                    this.userService.getTerms().subscribe(res => {
                        this.datasource.data = res;
                        this.loading = false;
                    }, err => {
                        this.loading = false;
                        if (err.error === 'Unauthorized') {
                        }
                    });
                }
                else {
                    //alert('declined');
                }
            });
    }
    ngAfterViewInit() {
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
    }
}