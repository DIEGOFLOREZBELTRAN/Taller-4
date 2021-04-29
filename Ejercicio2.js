// 2.	3 usuarios entran a una heladería a comprar un helado, pero hay un problema: los 
// precios no están al lado de cada estante con su respectivo helado. “Ellos
//  quieren comprar el helado más caro que puedan con la plata que tienen.
// Miguel tiene $1.000 
// Carlos tiene $2.000 
// Manuel tiene $500 
// Los precios de helados son los siguientes:
// Bonais: $400
// Palito de helado de agua: $1.000 
// Palito de helado de crema: $2.200
// Bombón helado con arequipe: $1.500
// Bombón helado con chispas de chocolate: $2.500
// Bombón helado con fresas: $2.800
// Medio litro de helado: $ 2.000

// El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
// Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las opciones disponibles
// El programa también tiene que poder dar los vueltos de su compra con su factura


var pregunta = 1;
var vueltos_final = 0;
var valor_final = 0;
var dinero = 0;
var g_Helado_bonais = '400';
var g_Palito_de_Helado_de_agua = '1000';
var g_Palito_de_Helado_de_crema = '2200';
var g_Bombón_Helado_con_arequipe = '1500';
var g_Bombón_Helado_con_chispas_de_chocolate = '2500';
var g_Bombón_Helado_con_fresas = '2800';
var g_Bombón_Medio_litro_de_Helado = '2000';
var usuario = 0;
//debugger permite hacer stop para pruebas 

while (pregunta == 1)
{
    var condicion = parseInt(prompt("QUE HELADO DESEA?\n 1 Helado Bonais: $400, \n2 Palito de Helado de agua: $1.000, \n3 Palito de Helado de crema: $2.200, \n4 Bombón Helado con arequipe: $1.500, \n5 Bombón Helado con chispas de chocolate: $2.500, \n6 Bombón Helado con fresas: $2.800, \n7 Medio litro de Helado: $2.000"));
    usuario = prompt("INGRESE SU DINERO?");
    dinero = parseInt(usuario);
    alert ('voy para la function');
    calcular_g(condicion);
    break;
}

function calcular_g(Helado) 
{
    switch (Helado) 
    {
        case 1:
            vueltos_final = (dinero - g_Helado_bonais);
            Helado = "Helado_bonais = $400 tus vueltos son:"
            break;

        case 2:
            vueltos_final = (dinero - g_Palito_de_Helado_de_agua);
            Helado = "Palito_de_Helado_de_agua = $1000 tus vueltos son:"
            break;
        
        case 3:
            vueltos_final = (dinero - g_Palito_de_Helado_de_crema);
            Helado = "Palito_de_Helado_de_crema = $2200 tus vueltos son:"
            break;
                
        case 4:
            vueltos_final = (dinero - g_Bombón_Helado_con_arequipe);
            Helado = "Bombón_Helado_con_arequipe = $1500 tus vueltos son:"
            break;
        
        case 4:
            vueltos_final = (dinero - g_Bombón_Bombón_Helado_con_chispas_de_chocolate);
            Helado = "Bombón_Helado_con_chispas_de_chocolate = $2500 tus vueltos son:"
            break;
        
        case 5:
            vueltos_final = (dinero - g_Bombón_Bombón_Helado_con_fresas);
            Helado = "Bombón_Helado_con_fresas = $2800 tus vueltos son:"
            break;
            
        case 6:
            vueltos_final = (dinero - g_Bombón_Bombón_Medio_litro_de_Helado);
            Helado = "Bombón_Medio_litro_de_Helado = $2000 tus vueltos son:"
            break;

        default: 
            alert ('no continuo grac');
        break;
    }
    alert("tu compra " + Helado + " seria de " +  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP' }).format(vueltos_final) + " pesos");
}

