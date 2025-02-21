// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch book data from an API or define it manually
    var books = [
      { title: "Book 1", price: 10 },
      { title: "Book 2", price: 15 },
      { title: "Book 3", price: 20 },
      { title: "Book 4", price: 12 },
    ];
  
    var bookList = document.getElementById("book-list");
    var cartItems = document.getElementById("cart-items");
    var cartTotal = document.getElementById("cart-total");
    var checkoutBtn = document.getElementById("checkout-btn");
  
    // Display the books in the book list
    books.forEach(function(book) {
      var li = document.createElement("li");
      li.textContent = book.title + " - $" + book.price;
      bookList.appendChild(li);
  
      // Add event listener to add the book to the cart
      li.addEventListener("click", function() {
        var cartItem = document.createElement("li");
        cartItem.textContent = book.title + "
  