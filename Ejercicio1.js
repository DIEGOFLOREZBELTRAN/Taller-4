// 1.	Pregunto si quiere el huevo frito.
// -Si me dice que si, lo frio, si me dice que no, lo hago hervido.
// -Una vez cocinado le pregunto si quiere sal en el huevo.
// -Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho
//  sal y después lo sirvo en el plato.

let opc = parseInt(prompt("Quiere el huevo frito. \n 1. SI \n 2. NO"));
let sal = parseInt(prompt("Quiere sal en el huevo. \n 1. SI \n 2. NO"));
let obj = {
    opciones_menu : opc, 
    sal: sal
};
let solucion = (obj)=>{
    if(obj.opciones_menu == 1 && obj.sal == 1){
        return ["El huevo esta frito y tiene sal"];
    }else if(obj.opciones_menu == 1 && obj.sal == 2){
        return ["El huevo esta frito y no tiene sal"];
    }else if(obj.opciones_menu == 2 && obj.sal == 1){
        return ["El huevo esta hervido y tiene sal"];
    }else if(obj.opciones_menu == 2 && obj.sal == 2){
        return ["El huevo esta hervido y no tiene sal"];
    }
}
console.log("Plato ", solucion(obj));


// let _indexSi = 0;
// let _indexNo = 10;

// let _arrayHuevo = new Array(20);

// let menu = "";
//     menu += "------------------------------------------------------------\n";
// 	menu += "--------------------- Menú Principal ---------------------\n"
// 	menu += "-------------------¿Quiere El Huevo Frito?-----------------\n";
//     menu += "------------------------------------------------------------\n";
// 	menu += "\n";
//     menu += "1. Si\n";
//     menu += "1. No\n";
//     menu += "0. Salir";
    
// let opc;
//     do{
//         opc = parseInt(prompt(menu));
        
//         let Huevo;
//         switch(opc)
//         {
//          case 1:
//              if(_indexSi == 1)
//              {
//                alert("¿Quiere Sal En El Huevo?");
//              }
//              else
//              {
//                Huevo = prompt("Si");
              
//              }

//         }
//     }while(_arrayHuevo.length < 20)

