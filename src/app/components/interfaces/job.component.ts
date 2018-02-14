export interface Job{
    _id:string;
    title:string;
    description:string;
    deadline:Date;
    startdate:Date;
    enddate:Date;
    wage:Number;
    hrsperweek: Number;
    resources:Number;
    funding:string;
    positionfor:string;
    facultycomment:string;
    admincomment:string;
    status:string;
    term:string;
    user:string;
    createdat:Date;
    updatedat:Date;
}