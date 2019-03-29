angular.module("shoppingList",[])
    .controller("newShoppingList", function ($scope) {
        $scope.products = ["Leche", "Huevos", "Pan"]
    })