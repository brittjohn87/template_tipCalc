function tipCalculator(){
    var billAmount = document.getElementById('billAmount').value;
    var serviceQuality = document.getElementById('serviceQuality').value;
    var guests = document.getElementById('guests').value;
  
    let total = billAmount * serviceQuality / guests
  
    finalTotal = total.toFixed(2);

    guests <= 1 ? $('#result').html("$ " + finalTotal) : $('#result').html(`$${finalTotal} each`)
  }
  
  document.getElementById('calculate').onclick = function(){
    tipCalculator();
  };