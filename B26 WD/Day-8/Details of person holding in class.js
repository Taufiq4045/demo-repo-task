// Class to Holde the person details

class person{
    constructor(firstName, lastName, sex, dob, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.dob = dob;
        this.location = location;  
    }

    getDetails(){
        console.log(this.firstName, this.lastName, this.sex, this.dob, this.location);
    }
}

let myDetails = new person("Mohd","TAUFIQ-","Male-","15th Apr 96-","Mangalore");

myDetails.getDetails();
