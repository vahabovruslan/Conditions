//Task 1
var num= Number(prompt("Ededi daxil edin"));
if (num>=100 && num<1000) {
    var numteklik=(num%100)%10;
    var numonluq=((num-numteklik)/10)%10;
    var numyuzluk=(num-(num%100))/100;
    if(numteklik==numonluq && numteklik==numyuzluk && numonluq==numyuzluk){
        alert("Ededin reqemleri beraberdir.");
    } 
    else {
        alert("Ededin reqemleri beraber deyl.")
    }
}
else{
    alert("Zehmet olmasa 3 reqemli eded daxil edin.")
}

//Task2

var fennler=prompt("Zehmet olmasa deyeri daxil edin.")
switch (fennler) {
     case "a":
        alert("Azərbaycan dili seçildi.");
         break;
         case "r":
        alert("Rus dili seçildi.");
         break;
         default:
            alert("Yanlis sorgu");
             break;
            }