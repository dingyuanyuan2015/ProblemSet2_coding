function compute_A_multiples_B_plus_C(A,B,C) {
    var D = 0;
    A = parseInt(A);
    B = parseInt(B);
    C = parseInt(C);
    D = A * B + C;
    return D;

  }



  function ask_ABC() {
     var A = document.getElementById("myForm"). elements [0].value;
     var B = document.getElementById("myForm"). elements [1].value;
     var C = document.getElementById("myForm"). elements [2]. value;
     var D = compute_A_multiples_B_plus_C(A,B,C);
     var A = document.getElementById("demo");
     A.style.fontStyle = "lucida console";
     A.style.fontSize = "20px";
     A.style.color = "tomato";
     document.getElementById("demo").innerHTML = "The answer is" + " " + D;
   }
