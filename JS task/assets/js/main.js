


// Daxil edilən müsbət tam ədədin palindrom olub-olmamasını yoxlayın
// Palindrom : 1221, 55, 47874

var num = prompt("Eded daxil edin:");
var eks = teklik;
var teklik = num % 10;
function isPolindromу(num) {
    var ters = 0;
    while (num > 9) {  
        num = (num - teklik) / 10;
        var teklik = num % 10;
        eks = eks* 10 + teklik;
    }
    if (eks==num){
        console.log("Palidrom ededdir");
    }
    else{
        console.log("Palidrom eded deyil");
    }
}