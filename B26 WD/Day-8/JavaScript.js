// Code to calculate Uber Price

class uber{
    constructor(totalKm, waitingTime = 0)
    {
        this.totalKm = totalKm;
        this.waitingTime = waitingTime;
    }

    // For the first 2km Uber Price is Rs.10 and thereafter Rs.4 per Km.

    uberFare(){
        if(this.totalKm <= 2){
            return "Rs.10"
        }
        this.totalKm = this.totalKm - 2;
        return ("Rs." + (10 + (this.totalKm * 4) + (this.waitingTime * 2)));
    }
}

let firstRide = new uber(2);
console.log(firstRide.uberFare());

let secondRide = new uber(10,5);
console.log(secondRide.uberFare());
