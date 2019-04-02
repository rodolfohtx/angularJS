angular.module('directoryApp',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl: "Pages/home.html"
            })
            .when("/name",{
                templateUrl: "Pages/name.html"
            })
            .when("/about-us",{
                templateUrl: "Pages/about-us.html"
            })
    })
    .controller('directoryController', function(){

        var dirList = this;

        dirList.list = [
            {nombre: 'Rodolfo', edad: 31, img: 'https://placeimg.com/24/24/any'},
            {nombre: 'Jonathan', edad: 29, img: 'https://placeimg.com/25/24/any'},
            {nombre: 'Erick', edad: 65, img: 'https://placeimg.com/24/25/any'},
            {nombre: 'Ana', edad: 29, img: 'https://placeimg.com/23/24/any'},
            {nombre: 'David', edad: 12, img: 'https://placeimg.com/24/23/any'},
            {nombre: 'Daniel', edad: 50, img: 'https://placeimg.com/25/25/any'},
            {nombre: 'Arturo', edad: 29, img: 'https://placeimg.com/23/26/any'},
            {nombre: 'Roberto', edad: 25, img: 'https://placeimg.com/22/27/any'},
            {nombre: 'Daniel', edad: 30, img: 'https://placeimg.com/23/27/any'},
            {nombre: 'Jose', edad: 89, img: 'https://placeimg.com/23/23/any'},
        ];

        dirList.toggle = true

        dirList.addPerson = function(){
            if(dirList.nombre != undefined && dirList.edad != undefined) {
                dirList.list.push({nombre: dirList.nombre, edad: dirList.edad})
                dirList.nombre = ''
                dirList.edad = 0
            }
        };

        dirList.removePerson = function(){
            dirList.list.pop();
        }

        dirList.count = 0;
    })
    .factory('Data', function() {
        return {message: "I'm data from a service"}
    });