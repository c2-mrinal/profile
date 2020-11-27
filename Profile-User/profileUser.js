var username= 'Kabadi';
var userID= 'XXX';
var email='Lorem@id';
var phone= '1234567890';
var address= 'DAIICT';
var orderCanceled= 12;
var orderSucessful= 24;
var orderTransit = 6;
var totalScrapSold= 12;
var totalAmountRecived= 1234;
var totalConDealer= 5;
var paymentMode= 'Virual & Cash';
var orderID='XXXXX';
var status='pending';
var placedate='dd/mm/yy';
var picktime = "hh/mm";
var dealername='Mukesh Kumar Pratap';
var paymentStatus= 'Sucess ';
var paymetMode= "Virtal";
var pickAddress= "Daiict";
var password= '';

$(userName).text(username);
$(userId).text(userID);
$(mailId).text(email);
$(phoneId).text(phone);
$(addressUser).text(address);
$(orderId).text(orderID);
$(orderStatus).text(status);
$(orderDate).text(placedate);
$(pickTime).text(picktime);
$(dealerName).text(dealername);
$(paymentStat).text(paymentStatus);
$(paymentMo).text(paymetMode);
$(pickAdd).text(pickAddress);
$(scrapSoldId).text(totalScrapSold);
$(totalAmt).text(totalAmountRecived);
$(conDealer).text(totalConDealer);
$(payMode).text(paymentMode);

$('#user-name').val(username);
$('#email').val(email);
$('#add').val(address);

$('#pass, #repass').on('keyup', function () {
  if ($('#pass').val() == $('#repass').val()) {
    $('#message').html('Password Match').css('color', 'green');
  } else 
    $('#message').html('Password Not Matching').css('color', 'red');
});
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


// donut chart code
var green = "rgba(52,191,158,1)";
var yellow = "rgba(255,232,124,1)";
var red = "#FF4242";
var transparent = "rgba(0,0,0,0)";

Chart.defaults.global.defaultFontColor = '#888888';
Chart.defaults.global.defaultFontFamily = '"Open Sans"';
//Chart.defaults.global.legend = false;

var companyCtx = document.getElementById("company");
var company = new Chart(companyCtx, {
  type: 'doughnut',
  data: {
    
    datasets: [{
      data: [orderCanceled, orderSucessful,orderTransit],
      backgroundColor: [
        red,
        green,
        yellow,
      ]
    }],
    labels: [
      "Canceled",
      "Successful",
      "In Transit",
      
    ],
  }
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