@tag1
Feature: Product Functionality
 
Background: User is logged in
Given User is on the login page
When User enters username
And User enters password
And User clicks the login button
Then User is logged in successfully
And User is navigated to products page
 
 @regression  @sanity @addProduct
Scenario: Adding a product to cart
Given User is logged in
When User click on the product
Then Product description is available
When User clicks on the add-to-cart button
Then Product is added to cart
When User clicks on the cart menu
Then The cart is opened
And User is able to view the added product
 
 @regression  @viewProduct 
Scenario: Viewing a product description
Given User is logged in
When User click on the product
Then Product description is available