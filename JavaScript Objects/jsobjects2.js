let employee=
{
    empname:"Scott",
    empid:1034,
    job:"Engineer",
    basicsalary:50000,
//method to calculate the bonus of the employee
    bonus:function()
    {
        return((this.basicsalary*10)/100);
    }
};
//console.log(employee["empname"]);
console.log("Calculated Bonus"+"  "+employee.bonus());