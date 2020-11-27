// Profile value
var dealerName= 'Kabadi';
var dealerID= 'XXX';
var email='Lorem@id';
var phone= '1234567890';
var Locality= 'Gandhinagar';
var verificationMode='Aadhar/Pan';
// donut chart value
var Canceled= 1;
var Sucessful= 3;
var Transit = 2;
// donut chart value end
var password= '';
$(userName).text(dealerName);
$(userId).text(dealerID);
$(mailId).text(email);
$(phoneId).text(phone);
$(veriMode).text(verificationMode);
$(addressUser).text(Locality);
$(pendingOrder).text(Transit);
$(sucessOrder).text(Sucessful);
$(cancelOrder).text(Canceled);
$('#user-name').val(dealerName);
$('#email').val(email);
$('#add').val(Locality);

$('#pass, #repass').on('keyup', function () {
  if ($('#pass').val() == $('#repass').val()) {
    $('#message').html('Password Match').css('color', 'green');
  } else 
    $('#message').html('Password Not Matching').css('color', 'red');
});


// price updator
let Plastic = 0 ;
let Paper= 0;
let Book= 0;
let Steel = 0;
let Copper= 0;
let Glass= 0;
let Aluminium = 0;
let Battery =0;
let Wood = 0;
let Wire= 0;
let Electrical = 29;
let Antique = 101;
var price ;
var selItemPri;     
 
document.getElementById("totalPrice").innerHTML=totalPrice;
function display()
{
    let item   = document.getElementById('selItem').value;
    let amount  = document.getElementById('u-amount').value;
    let newRow  = document.getElementById('newRow');
    switch(item){
        case  'Plastic':
        Plastic= amount ;
        selItemPri= Plastic;  
        break;
        case  'Paper':
        Paper= amount;
        selItemPri= Paper;  
        break;
        case  'Book':
        Book= amount ;
        selItemPri= Book;  
        break;
        case  'Steel':
        Steel=amount ;
        selItemPri= Steel;  
        break;
        case 'Copper': 
        Copper=amount;
        selItemPri= Copper;  
        break;
        case 'Glass': 
        Glass= amount;
        selItemPri= Glass;  
        break;
        case 'Aluminium': 
        Aluminium = amount;
        selItemPri= Aluminium;  
        break;
        case 'Battery': 
        Battery= amount;
        selItemPri= Battery;  
        break;
        case  'Wood' : 
        Wood= amount;
        selItemPri= Wood;  
        break;
        case  'Wire': 
        Wire= amount;
        selItemPri= Wire;  
        break;
        case  'Electrical':
        Electrical= amount; 
        selItemPri= Electrical;  
        break;
        case  'Antique' : 
        Antique= amount;
        selItemPri= Antique;  
        break;
    }
    
        console.log(price);
var row = document.createElement("tr");
var iSel = document.createElement('td');
var iPri = document.createElement('td');
row.appendChild(iSel);
iSel.appendChild(document.createTextNode(item));
row.appendChild(iPri);
iPri.appendChild(document.createTextNode(selItemPri));
newRow.appendChild(row);
}



// email Validator

$("#clear").on("click", function(){
  $("input[type=text], textarea").val("");
  $("input[type=email], textarea").val("");
  $("input[type=password], textarea").val("");
});
function changeFunct(){
  alert('Update Have been saved');
  var username= '';
  var email= '';
  var address= '';
}

// image upload code
$(document).ready(function() {

    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('.profile-pic').attr('src', e.target.result);
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }
  

  $(".file-upload").on('change', function(){
      readURL(this);
  });
  
  $(".upload-button").on('click', function() {
     $(".file-upload").click();
  });
});




// showmoew showless
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("showM");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show More"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show Less"; 
    moreText.style.display = "inline";
  }
}