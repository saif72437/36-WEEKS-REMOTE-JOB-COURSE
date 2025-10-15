class Product{
    constructor(name, category, price){
        this.name = name
        this.category = category
        this.price = price
    }

    showDetails(){
        console.log("Product: ", this.name);
        console.log("Price: ", this.price);
        console.log("Category: ", this.category);
        
    }

    applyDiscount(discountPercent){
        const discountAmount = (this.price * discountPercent) / 100
        this.price -= discountAmount
        console.log(`${discountPercent}% discount applied! New price RS: ${this.price}`);
        
    }


}

let shampoo = new Product("Head&Shoulder", "Haircare", 299)
shampoo.showDetails()
shampoo.applyDiscount(30)

let shavingCream = new Product("Gellet", "Skincare", 1000)
shavingCream.showDetails()
shavingCream.applyDiscount(90)

