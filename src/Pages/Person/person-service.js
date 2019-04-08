angular.module('person',[])
    .service('onePerson', function(){
        this.final = function(){
            return mensaje = "Hola mundo! Esto se hace mediante un servicio"
        }
    })