// code to get details of class circle

class circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    setradius(value){
        this.radius = value;
    }

    setcolor(appearce){
        this.color = appearce;
    }

    getArea(){
        let area = Math.PI * Math.pow(this.radius,2);
        console.log(area.toFixed(2), this.color);
    }

    getCircumference(){
        let circumferance = 2 * Math.PI * this.radius;
        console.log(circumferance.toFixed(2), this.color);
    } 
}

let circleDetail = new circle();

circleDetail.setradius(5);
circleDetail.setcolor("Blue");
circleDetail.getArea();
circleDetail.getCircumference();