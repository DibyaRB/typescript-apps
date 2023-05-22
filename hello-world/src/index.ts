//We don't have to annotate everytime

let sales:number = 123_456_789;
let coure:string = "TypeScript";

let is_published:boolean = true;

let level; // typescript assumes this value is of type any 

function render(document: any){
    console.log(document);
}

let numbers:number[] = [1,2,3];

numbers.forEach(n=>n.toLocaleString);

//Tuples : Internally they are just normal JS Arrays

let user:[Number, string]  = [1, 'Dibya'];

//ENUMS

const enum Size { Small = 0, Medium, Large}; //Mediume gets value as 1. Large as 2