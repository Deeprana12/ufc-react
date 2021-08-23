/** -----------------Documentation ------------- created by Niyam
 class   || min-length  || max-length || used for tag || use & special check
 ========================================================================================================
 .name   ||  1 char     || 30 char    || input        || name, number and text-fields in input tag
 .text   ||  1 char     || 150 char   || textarea     || name, number and text-fields in textarea tag
 .number ||  10 char    || 30 char    || input        || mobile no. having 10 digit & only 10 char allowed
 .email  ||  1 char     || 30 char    || input        || check email using regex
 .password | 8 char     || 30 char    || input        || must be 8 char

 .alphaOnly -> [a-z],[A-Z],space allowed
 .numOnly   -> [0-9] allowed
 .emailOnly -> [a-z],[A-Z],space,[0-9], dot, @ allowed

 #where we have to add these classes to validate the form?
 => add above classes in tag div having input/ textarea...
 => add validate class in form tag
 => add id 'submit' in submit button
 **/
function alphaOnly(event){
    let c = event.which;
    if( !((c > 64 && c < 91) || (c > 96 && c < 123) || c==32)){
        alert("Only Alphabet allowed");
        event.preventDefault();
    }
}
function numOnly(event){
    let c = event.which;
    if( !(c > 47 && c < 59)){
        alert("Only Number allowed");
        event.preventDefault();
    }
}
function emailOnly(event){
    let c = event.which;
    if( !((c > 64 && c < 91) || (c > 96 && c < 123) || c==32 || (c > 47 && c < 59) || c==46 || c==64)) {
        alert("Only Alphabet, Number, '.' and '@' allowed");
        event.preventDefault();
    }
}
function setName(str){
    str = str.toLowerCase();
    return str.substr(0,1).toUpperCase() + str.substr(1);
}
function isEmail(email){
    let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$("input").on("keypress", function(event){
    if($(this).val().length>=30){
        alert("Max. 30 Character allowed.");
        event.preventDefault();
    }
});
$("textarea").on("keypress", function(event){
    if($(this).val().length>=150){
        alert("Max. 150 Character allowed.");
        event.preventDefault();
    }
});
$(".alphaOnly").on("keypress", function(event){
    alphaOnly(event);
});
$(".numOnly").on("keypress", function(event){
    numOnly(event);
});
$(".emailOnly").on("keypress", function(event){
    emailOnly(event);
});
function showOrHideError(event, val, show, stop){
    if(show) {
        $(val).find(".invalid-feedback").show();
        $(val).find("input").addClass("invalid-input");
    } else{
        $(val).find(".invalid-feedback").hide();
        $(val).find("input").removeClass("invalid-input");
    }
    if(stop) {
        event.preventDefault();
        event.stopPropagation();
    }
}
$(".validate").find(".name").each(function(index,val){
    $(val).find("input").on("input", function(event){
        showOrHideError(event, val, !($(this).val().length>0), false);
    });
});
$(".validate").find(".text").each(function(index,val){
    $(val).find("textarea").on("input", function(event){
        showOrHideError(event, val, !($(this).val().length>0), false);
        if(!($(this).val().length>0)){
            $(val).find("textarea").addClass("invalid-input");
        } else{
            $(val).find("textarea").removeClass("invalid-input");
        }
    });
});
$(".validate").find(".password").each(function(index,val){
    $(val).find("input").on("input", function(event){
        showOrHideError(event, val, !($(this).val().length>7), false);
    });
});
$(".validate").find(".email").each(function(index,val){
    $(val).find("input").on("input", function(event){
        showOrHideError(event, val, !(isEmail($(this).val())), false);
    });
});
$(".validate").find(".number").each(function(index,val){
    $(val).find("input").on("input", function(event){
        showOrHideError(event, val, $(this).val().length!=10, false);
    });
});
$("#submit").on('click', function(event){
    $(".validate").find(".name").each(function(index, val){
       let value = $(val).find("input").val();
       showOrHideError(event, val, !(value.length>0), !(value.length>0));
    });
    $(".validate").find(".text").each(function(index, val){
        let value = $(val).find("textarea").val();
        showOrHideError(event, val, !(value.length>0), !(value.length>0));
        if(!($(this).val().length>0)){
            $(val).find("textarea").addClass("invalid-input");
        } else{
            $(val).find("textarea").removeClass("invalid-input");
        }
    });
    $(".validate").find(".password").each(function(index, val){
        let value = $(val).find("input").val();
        showOrHideError(event, val, !(value.length>7), !(value.length>7));
    });
    $(".validate").find(".email").each(function(index, val){
        let value = $(val).find("input").val();
        showOrHideError(event, val, !(isEmail(value) && value.length>0), !(isEmail(value) && value.length>0));
    });
    $(".validate").find(".number").each(function(index, val){
        let value = $(val).find("input").val();
        showOrHideError(event, val, value.length!=10, value.length!=10);
    });
});