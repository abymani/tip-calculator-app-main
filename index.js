
$(document).ready(function(){

    let errorMsg = "<span>Can't be empty </span>";
    let tip =0;

    // form validation
    $("input").keydown(function (e) {
        if ((e.which < 48 || e.which > 57) && (e.which !== 8) && (e.which !== 0) ) {        
           return false;
        }
        return true;
    });

    //updating tip and total on keypress
    $("input").keyup(function (e){
        update();
    });
    $(".custom").keyup(function (e){
        tip = $(this).val();
        update();
    })

    //setting behaviour when an input element is focus or unfocused
    $("input").blur(function(){
        if($(this).val()=='' || $(this).val()=='0'){
            $(this).css("outline","2px solid red");
            // displaying error msg if input is not filled
            let id = $(this).attr("id");
            if(id !== "tip")
            {
                let label = $(`label[for=${id}`);
                label.append(errorMsg); 
            }
        }   
    }); 
    $("input").focus(function(){
        if($(this).val()== '0'){$(this).val('')}
        $(this).css("outline","2px solid hsl(172, 67%, 45%)");     
        $("span").remove();
    }); 
    $(".custom").blur(function(){

        $(this).css("outline","0px");
        
    });
    $(".custom").focus(function(){
        $(".tip-btn").css("background-color","hsl(183, 100%, 15%)");
    });

    // getting tip value
    $(".tip-btn").click(function(){
       tip= $(this).attr("data-value");
       $(".tip-btn").css("background-color","hsl(183, 100%, 15%)");
       $(this).css("background-color","hsla(172, 67%, 45%,0.8)");
       $(".custom").val("");
       $("span").remove();
       update();
    });

    //updating values based on the inputs
   function update(){

    const bil = $("#bill").val();
    const persons = $("#persons").val();   
    if(bil && persons){
        let tipAmount= bil *tip /100;
        let total = bil - tipAmount;
        console.log(tipAmount);
        $("#tip-amount").text(`$${tipAmount}`);
        $("#total").text(`$${total}`);
    }
    else {
        console.log("bill is not entered");
    }
   }

   $(".reset-btn").click(function(){

    $("#bill").val("0");
    $("#persons").val("0");
    tip=0;
    update();
    $(".tip-btn").css("background-color","hsl(183, 100%, 15%)");
   });
}); 