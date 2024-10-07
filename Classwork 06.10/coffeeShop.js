class CoffeeShop{
    constructor(name, menu){
        this.name = name;
        this.menu = menu;
        this.orders = [];
    }

/*******************************************************/

    addOrder(order){
        for(let i = 0; i < this.menu.length;  i++){
            if(this.menu[i]['name'] === order){
                this.orders.push(this.menu[i])
                console.log(this.menu[i]['name']);
                return `${order} has been added to the list`, this.orders;        
            } 
        }
    return `Item ${order} is unavailable`
    }

/*******************************************************/

    cheapestItem(){
        let minPrice = Infinity;
        let cheapestItem = '';
        for(let i = 0; i < this.menu.length; i++){
            if(this.menu[i]['price'] < minPrice){
                minPrice = this.menu[i]['price'];
                cheapestItem = this.menu[i]['name'];
            }
        }
        return cheapestItem;
    }

    /*******************************************************/

    dueAmount(){
        let total = 0;
        for(let i = 0; i < this.orders.length; i++){
            total += this.orders[i].price       
        }
    return total;
    }
    
    /*******************************************************/

    drinksOnly(){
        return this.menu.filter(order => order.type === 'drink')
    }

    /*******************************************************/

    foodOnly(){
        return this.menu.filter(order => order.type === 'food')
    }

    /*******************************************************/

    fulfillOrder(){
        if(this.orders.length > 0){
            let readyOrder = this.orders[0]
            this.orders.shift()
            return `The ${readyOrder.name} is ready!`
        }else return "All orders have been fulfilled"
    }

    /*******************************************************/

    listOrders(){
        return this.orders;
    }
}

const tcsMenu = [
    {name: 'Burger', price: 5.99, type: 'food'},
    {name: 'Fries', price: 2.99, type: 'food'},
    {name: 'Soda', price: 1.99, type: 'drink'},
    {name: 'Salad', price: 4.99, type: 'food'},
    {name: 'Water', price: 0.99, type: 'drink'},
    {name: 'Iced Coffee',  price: 2.49, type: 'drink'},
]

let tcs = new CoffeeShop('Smbati mot',  tcsMenu)

// console.log(tcs.addOrder('Soda'));
// console.log(tcs.addOrder('Fries'));
// console.log(tcs.addOrder('chupachups'));
// console.log(tcs.listOrders());
// console.log(tcs.dueAmount())
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.foodOnly());
// console.log(tcs.drinksOnly());
