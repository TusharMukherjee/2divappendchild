var totalp = document.querySelector("#tprice");
var paidp = document.querySelector("#paid");
var sub = document.querySelector("#mutton");
var outbox = document.querySelector(".area");
var test = document.querySelector(".test");

var money = [2000, 500, 200, 100, 20, 10, 5, 1];

var a = 0;

 function clearous(){
    noteBlock.innerHTML = "";
 }





var clicks = 0;
  function hello() {
      clicks += 1;
      console.log(clicks);
       if(clicks < 2){
      for(var j=0; j < 1; j++){
         var noteBlock = document.createElement('div');
         noteBlock.classList.add("noteBlock");
         outbox.appendChild(noteBlock);
        //  noteBlock.innerHTML = "nee";
         console.log(clicks);
         return noteBlock;
      }
      }
  }









  


function errors(total,paid){
  // console.log(tamt);
   var errmsg =document.createElement('div');
   document.getElementsByClassName('noteBlock').appendChild(errmsg);
    if(paid == "" || total == "" || paid < 0 || total < 0){
        try {
            if(total == "" || paid == "") throw "can't be empty";
            if(total < 0 || paid < 0) throw "can't be negative";
          }
          catch(err) {
            errmsg.innerText = "Input " + err;
          }
        }
        else if(paid < total){
            errmsg.innerText = "Sorry Paid amount is less then Total amount"
        }
        else{
            process(total,paid);
        }
}

function process(total, paid){
    clearous();
    var leftAmt = paid - total;
    for(var i = 0; i < 8; i++){
        if(parseInt(leftAmt) >= money[i]){
            console.log(leftAmt)
            var quo = parseInt(leftAmt / money[i]);
            console.log(money[i]);
            var rem = parseInt(leftAmt) - (parseInt(quo) * money[i]);
            var res = parseInt(quo);
            // var image = document.createElement('img');
            // image.src = 'iconmonstr-currency-25.svg';
            
            var list = document.createElement('div');
            list.innerHTML = "<img src = \"iconmonstr-currency-25.svg\">";
            list.innerText = "₹" + money[i] + " ↔ " + res;
            // var list = document.createElement('li');
            // list.innerText = note[i] + " ka " + res;
            
            noteBlock.appendChild(list);
            console.log(quo.toFixed(0) * money[i] + " " + rem);
            leftAmt = rem;
            if(rem == 0){
                break; 
            }
        }
    }
}