import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTable, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DialogService } from 'ng2-bootstrap-modal';
import { UserService } from '../../servcies/user.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'terms',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.css'],
    encapsulation: ViewEncapsulation.None,
    host: {
        'class': 'new-mat-paginator'
    }
})
export class FacultyJobs {

    displayedColumns = ['name', 'status', 'from', 'to', 'type', 'action'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    constructor(private userService: UserService, private dialogService: DialogService) {

        
    }

    ngAfterViewInit() {

    }
}