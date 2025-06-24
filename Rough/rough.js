// var links = document.getElementsByTagName("a")

// for(no = 1; no < links.length; no++){
//     links[no].className = "links-" + no;
// }







// function areaOfTriangle(b,h){
//     var area = (b * h) / 2;
//     console.log(area);
//     return area;
// }

// // var myRESULT
// var myResult = areaOfTriangle(3,4);
// console.log("the area is " + myResult)





// var number = "kk";

// if(!isNaN(number)){
//     console.log("nice number bro")
// }else{
//     console.log("its not a number bro")
// }





// var string = 'i\'m a "pretty" string';

// console.log(string);
// console.log(string.indexOf("string"))

// if (string.indexOf("string") === -1) {
//     console.log("yeah");
// } else {
//     console.log("the word string starts at position " + string.indexOf("string"));
// }






// var spr = "Ajayi Daniel";
// var spr2 = spr.slice(1,5);
// console.log(spr2 + "iiiiii");

// var banks = "access, zenith, GT, diamond, polaris, keystone";
// console.log(banks);

// var banksarray = banks.split(",");
// console.log(banksarray)






// var danArray = [10,50,20,30,70,90]
// console.log(danArray)
// console.log(danArray[2])
// console.log(danArray.sort())
// console.log(danArray.reverse())










// object creation


// var myHouse ={
//     maxheight:100,
//     landlord:"mama",
//     area: function(l,b,h) {
//         console.log(l*b*h);
        
//     },
//     cap: function(){
//         console.log(this.landlord)
//     }
// }

// console.log(myHouse.maxheight);
// console.log(myHouse.landlord);
// myHouse.area(20,40,100);
// myHouse.cap();





// var myobject = {
//     name:"daniel",
//     height:"189",
//     myfunc: function(a,b){
//         console.log(a*b);
//     }

// }

// console.log(myobject.name);
// console.log(myobject.height);
// myobject.myfunc(3,3);



// Constructor function

var Rect = function(name, length, breadth){
    this.name = name;
    this.length = length;
    this.breadth = breadth;

    this.perimeter = function(l,b){
       console.log(2(l+b));
    };
    this.logname = function(){
        console.log("the name is "+this.name)
    }
}

var rect2 = new Rect("dan",50,10);

rect2.logname("dan")