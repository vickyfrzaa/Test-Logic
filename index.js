var nama = 'hello world';
console.log(nama.split('').reverse().join(''));


function jumlah(a, b){
    for(i=1; i<= b; i++){
        a++;
    }
    return a;
}
var a = jumlah(1, 4);
console.log(a);

function occurrence(str, word){
    let a = str.split(" ");
    let count = 0;
    for(i=0; i<a.length; i++){
        if(word == (a[i]))
            Count++;
    }
    let str = ["list of the same string same same string"];
    let word = "same";
    console.log(occurrence(str, word));
}


let jumlah = ["Lorem ipsum dolor sit amet", "a"];
let a = (array, count) => {
        return array.filter((b) => b == count).length;
    };
console.log(a(jumlah, "a"));

function jumlahKata(str){
    var a = 0;
    var b = 1;
    var state = 0;
    var word = 0;
    for(i=0; i<str.length; i++){
        if(str[i] == ' '){
            state = a;
    }else if(state == a){
            State = b;
            Word++;
    }
        i++;
    }
    return word;
}
var str = ["lorem lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sem libero."];
console.log(jumlahKata(str));
    
    