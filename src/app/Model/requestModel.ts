export class RequestModel {
    constructor(
        // public Request_ID?: string,
        // public Emp_ID?: string,
        // public Mgr_Qlid?: string, 
        // public Emp_Gender?: string, 
        // public Name?: string, 
        // public Shift_ID?: string,
        // public Emp_Mob_Nb?: string,
        // public Rqst_Date_Time?: string,
        // public Start_Date_Time?: string,
        // public End_Date_Time?: string,
        // public Approval?: string,
        // public Destination?: string,
        // public Emp_Pickup_Area?: string,
        // public Allocated?: string,
        // public Other_Address?: string,
        // public Pickup_Address?: string

        public Emp_ID?: string,
        public Rqst_Date_Time?: string,
        public Destination?: string,
        public Request_ID?: string,
        public Manager_Qlid?: string,
        public End_Date?: string,
        public Allocated?: string,
        public Source?: string,
        public Manager_Name?: string,
        public Emp_Gender?: string,
        public Start_Time?: string,
        public Emp_Pickup_Area?: string,
        public Other_Address?: string,
        public Employee_Name?: string,
        public Emp_Mob_Nb?: string,
        public Start_Date?: string,
        public Approval?: string
    ) { }
}
