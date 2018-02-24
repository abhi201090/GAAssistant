import { UserInfo } from '../interfaces/user.component';
import { Term } from './term.component';
export interface Job {
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
}