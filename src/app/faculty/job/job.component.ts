import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTable, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DialogService } from 'ng2-bootstrap-modal';
import { UserService } from '../../servcies/user.service';
import { FormsModule } from '@angular/forms';
import { AddJobDialogContent } from './addjobdialog.component';
import { ViewJobDialogContent } from './viewjobdialog.component';
import { EditJobDialogContent } from './editjobdialog.component';
import { AuthService } from '../../servcies/auth.service';

@Component({
    selector: 'jobs',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css'],
    encapsulation: ViewEncapsulation.None,
    host: {
        'class': 'new-mat-paginator'
    }
})
export class FacultyJobs {

    displayedColumns = ['title', 'description', 'term', 'status', 'action'];
    loading: boolean = false;
    datasource = new MatTableDataSource([]);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(private userService: UserService, private dialogService: DialogService, private authService: AuthService) {
        this.loading = true;
        this.userService.getFacultyJobs().subscribe(res => {
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
    viewjob(data) {
        let disposable = this.dialogService.addDialog(ViewJobDialogContent, {
            _id: data._id,
            title: data.title,
            description: data.description,
            requirements: data.requirements,
            deadline: data.deadline,
            startdate: data.startdate,
            enddate: data.enddate,
            wage: data.wage,
            hrsperweek: data.hrsperweek,
            resources: data.resources,
            funding: data.funding,
            positionfor: data.positionfor,
            facultycomment: data.facultycomment,
            admincomment: data.admincomment,
            status: data.status,
            term: data.term,
            user: data.user,
            createdat: new Date(Date.now()),
            updatedat: new Date(Date.now())
        })
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {

                }
                else {
                    //alert('declined');
                }
            });
    }

    editjob(data) {
        let disposable = this.dialogService.addDialog(EditJobDialogContent, {
            _id: data._id,
            title: data.title,
            description: data.description,
            requirements: data.requirements,
            deadline: data.deadline,
            startdate: data.startdate,
            enddate: data.enddate,
            wage: data.wage,
            hrsperweek: data.hrsperweek,
            resources: data.resources,
            funding: data.funding,
            positionfor: data.positionfor,
            facultycomment: data.facultycomment,
            admincomment: data.admincomment,
            status: data.status,
            term: data.term,
            user: data.user,
            createdat: new Date(Date.now()),
            updatedat: new Date(Date.now())
        })
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    this.loading = true;
                    this.userService.getFacultyJobs().subscribe(res => {
                        this.datasource.data = res;
                        this.loading = false;
                    }, err => {
                        this.authService.reset();
                        this.loading = false;

                    });
                }
                else {
                    //alert('declined');
                }
            });
    }

    deletejob(data) {

    }

    opendialog() {
        let disposable = this.dialogService.addDialog(AddJobDialogContent, {})
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    this.loading = true;
                    this.userService.getFacultyJobs().subscribe(res => {
                        this.datasource.data = res;
                        this.loading = false;
                    }, err => {
                        this.authService.reset();
                        this.loading = false;

                    });
                }
                else {

                }
            });
    }
    ngAfterViewInit() {
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
    }
}