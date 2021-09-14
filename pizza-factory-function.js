module.exports = function pizzaCart(){
    let smallTotal;
    let mediumTotal;
    let largeTotal;

    function buyPizza(price , size){
        if(size === 'smallpizza'){
            return price += 35.00
        }
        if(size === 'largepizza'){
            return price += 85.00
        }
        if(size === 'mediumpizza'){
            return price += 65.00
        }
        
    }

    function totalPizza(){
        return smallTotal 

    }
    function totalPizza(){
        return mediumTotal 

    }

    function totalPizza(){
        return largeTotal 

    }
        return{
            buyPizza,
            totalPizza
        }
       
}
  
    