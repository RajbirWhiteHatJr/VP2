class Food{

    constructor(){

       var foodstock=0
       var lastFed=0

    }
  
    thisimage = loadImage('images/Milk.png');

    getfoodStock(){
        
        var foodStocRef = database.ref('Food')
        foodStocRef.on("value",function(data){
         Food = data.val();
         
         
        })
    }

    
    updateCount(food){

        database.ref("/").update({
            Food: food
        })
    }


    display(){

        var button = createButton('Feed The Dog')
        button.position(180,200)
        button.mousePressed(feedDog);
         




    }
    
}