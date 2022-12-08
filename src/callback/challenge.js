const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

//Funcion principal que obtendrá la información del producto como un objeto
function fetchData(urlApi, callback){
    //inicializar un objeto de tipo XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    //El metodo .open realiza la petición de apertura de comunicación,
    //el metodo puede ser 'GET' o 'POST', luego se envia la URL,
    //si es asincrono (true o false), usuario y contraseña.
    //En esta caso solo se utiliza el metodo, la url y async
    xhttp.open('GET', urlApi, true);
    /*
    * En este metodo almacena el nombre de la función que se ejecutara cuando
    el objeto XMLHttpRequest cambie de estado
    */
    xhttp.onreadystatechange = function(evento){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products` , function(error1, data1){
    //validar si me ha regresado un error, pues detenga todo ejecución
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});