angular.module('directoryApp',['ngRoute', 'person'])
    .config(function($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl: "Pages/Home/home.html"
            })
            .when("/name",{
                templateUrl: "Pages/Person/name.html"
            })
            .when("/about-us",{
                templateUrl: "Pages/AboutUs/about-us.html"
            })
    })
    
    .controller('directoryController' , function(oper, $location, calc, onePerson){
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

        dirList.cards = [
            {nombre: 'Mante', hab: 31, img: 'https://placeimg.com/150/80/any'},
            {nombre: 'Monterrey', hab: 29, img: 'https://placeimg.com/150/81/any'},
            {nombre: 'Tijuana', hab: 65, img: 'https://placeimg.com/150/82/any'},
            {nombre: 'Reynosa', hab: 29, img: 'https://placeimg.com/150/83/any'},
            {nombre: 'Matamoros', hab: 12, img: 'https://placeimg.com/149/81/any'},
            {nombre: 'China', hab: 50, img: 'https://placeimg.com/149/82/any'},
            {nombre: 'Matehuala', hab: 29, img: 'https://placeimg.com/149/83/any'},
            {nombre: 'Miquihuana', hab: 25, img: 'https://placeimg.com/151/80/any'},
            {nombre: 'Piedras Negras', hab: 30, img: 'https://placeimg.com/151/81/any'},
            {nombre: 'Valles', hab: 89, img: 'https://placeimg.com/151/82/any'},
        ];

        dirList.toggle = true

        dirList.addPerson = function(){
            if(dirList.nombre != undefined && dirList.edad != undefined) {
                dirList.list.push({nombre: dirList.nombre, edad: dirList.edad})
                dirList.nombre = ''
                dirList.edad = 0
            }
        };

        dirList.newone = function(x) {
            console.log(x);
        }

        dirList.removePerson = function(){
            dirList.list.pop();
        }

        dirList.count = 0;

        dirList.orderedBy = "nombre";

        dirList.name = "Jhon";

        dirList.one = oper.ADD(26,30);
        dirList.two = oper.REST(30,26);

        dirList.myURL = $location.absUrl();

        dirList.square = function(){
            dirList.squareRes = calc.SQR(dirList.valNum);
        }

        dirList.callService = onePerson.final(dirList.valNum);
    })

    .service('oper', function() {
        this.ADD = function(a,b) {
            return a + b
        }

        this.REST = function(a,b) {
            return a - b;
        }
    })

    .service('calc', function(){
        this.SQR = function(a) {
            return a * a
        }
    })
    
    .factory('Data', function(a,b) {
        return message = "Res: "+(a+b)
    });