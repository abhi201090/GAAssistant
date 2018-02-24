import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http'
import { SampleModel } from '../components/datatable/sampleModel';
import { Observable } from 'rxjs/Observable';
import { window } from 'rxjs/operator/window';
import { UserInfo } from '../components/interfaces/user.component';
import { Term } from '../components/interfaces/term.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Job } from '../components/interfaces/job.component';


@Injectable()
export class UserService {

  private serviceURL = "http://localhost:3000/";
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<UserInfo> {
    return this.http.get<UserInfo>('/userDetails');
  }

  addTerm(data): Observable<any> {
     return this.http.post('/addterm', data);
  }

  updateTerm(data): Observable<any> {
    return this.http.post('/updateterm', data);
  }

  deleteTerm(data): Observable<any>{
    return this.http.post('/deleteterm', data);
  }

  getTerms(): Observable<Term[]> {
    return this.http.get<Term[]>('/getTerms');
  }

  getValidTerms():Observable<Term[]>{
    return this.http.get<Term[]>('/validTerms');
  }

  addJob(data):Observable<any>{
    return this.http.post('/addJob',data);
  }

  getFacultyJobs():Observable<Job[]>{
    return this.http.get<Job[]>('/getFacultyJobs');
  }

  updateJob(data):Observable<any>{
    return this.http.post('/updateJob',data);
  }
}
