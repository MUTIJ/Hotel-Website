var bookNowButton = document.getElementById("book-now");

bookNowButton.addEventListener("click", function() {
  var confirmed = confirm("Are you sure you want to book this room?");
  if (confirmed) {
    window.location.href = "payment.html";
  }
});

var bookNowButton = document.getElementById("book-nowww");

bookNowButton.addEventListener("click", function() {
  var confirmed = confirm("Are you sure you want to book this room?");
  if (confirmed) {
    window.location.href = "payment.html";
  }
});
var bookNowButton = document.getElementById("book-noww");

bookNowButton.addEventListener("click", function() {
  var confirmed = confirm("Are you sure you want to book this room?");
  if (confirmed) {
    var phoneNumber = prompt("Please enter your M-Pesa phone number:");
    var amount = 500; 
    var accessToken = "1000"; 

    // Send the payment request to the M-Pesa API
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest");
    xhr.setRequestHeader("Authorization", "Bearer " + accessToken);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Payment request successful, redirect user to M-Pesa payment page
          var response = JSON.parse(xhr.responseText);
          var checkoutRequestId = response.CheckoutRequestID;
          window.location.href = "https://www.safaricom.com/mpesa_online/checkout/" + checkoutRequestId;
        } else {
          // Payment request failed, display error message
          alert("Payment request failed. Please try again later.");
        }
      }
    };
    xhr.send(JSON.stringify({
      "BusinessShortCode": "YOUR_BUSINESS_SHORTCODE", // Replace with your actual business short code
      "Password": "YOUR_PASSWORD", // Replace with your actual password
      "Timestamp": new Date().toISOString().replace(/[:-]/g,"").slice(0,-5),
      "TransactionType": "CustomerPayBillOnline",
      "Amount": amount,
      "PartyA": phoneNumber,
      "PartyB": "YOUR_BUSINESS_SHORTCODE",
      "PhoneNumber": phoneNumber,
      "CallBackURL": "YOUR_CALLBACK_URL", // Replace with your actual callback URL
      "AccountReference": "Hotel Booking",
      "TransactionDesc": "Payment for hotel booking"
    }));
  }
});