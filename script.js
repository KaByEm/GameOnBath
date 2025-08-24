document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "✅ Booking successful! We'll email you details shortly.";
  document.getElementById("formMessage").style.color = "green";
  this.reset();
});
