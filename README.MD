# Competency #

 - [Intro] 
 - [Install Dependencies](#How-to-install-dependencies)
 - [Start Mongo](Start-Mongo)
 - [Start Server](#Start-Server)
 - [Access Server](#How-to-access-the-server)
 - [Seed the Database](#How-to-connect-to-and-seed-the-database)
 - [Instructions](#Instructions-for-typical-user)
 - [References](#References)
---

## Intro ##
Welcome to my Pizza By The Slice & Shakeups on Ice. I have a mobile Pizza RV that serves pizza by the slice or an entire pizza that is XL. The XL pizza can be ordered online and picked up at a location that can be found by looking at my map on the location page. If I move I only move my RV on the hour if I move at all.

---

## Start Mongo ##
Open a floating terminal and type :

```bash
  `/usr/local/mongodb/bin/mongod --dbpath ~/.mongo`
```

## Install Dependencies For Backend##
Let's install our dependencies. Start by opening your terminal in the projects main directory.

```bash
`cd server`
`npm i`
```
---
## Database Seed ##

Every time you refresh your page your seed will be there.

``` bash
  `npm run seed`
```
---

## Start Server ##
Once all of the dependencies are successfully installed you can start the server by typing the following into the terminal

```bash
  `npm start`
```
---
---
## Install Dependencies for Front End##
Let's install our dependencies. Start by opening your terminal in the projects main directory.
```bash
`cd client`
`npm i`
```
---
## Start React ##
Once all of the dependencies are successfully installed you can start your React by typing the following into the current terminal

```bash
  `npm start`
```
---
 

## Instructions ##
 
 1. Once the user has loaded the page onto their browser, they will see the home/landing page. At the top of the home page is the nav bar. Within the nav bar are links to location page and the sign-in modal. The image of a pizza at the top of the nav bar is clickable and will take the user back to the home page when clicked. If the user clicks "Sign In", a modal will appear with areas to input the user email address and password. Under the nav bar is a small blurb about our business. Folling the blurb about our business is a button to sign up for exclusive offers. Once the button is clicked a modal will appear with areas for the user's first name, last name, email address, password and verify password. Once the users clicks the submit button the modal will disappear and the user will be taken back to the home page. Below the sign-up is the menu and cart to order your products. At the top of the menu is a link for "Carry Out" that takes you to the locations page. The menu is divided into 3 sections, By The Slice, XL Speciality, Shakeups. Once the user has made their selections a dropdown appears with the item, the number of items and the total price. When the user is ready to check out they will click the "$$ Check Out $$" button. Once the check out button is clicked a modal will appear with areas for the first name, last name. credit card number, card type and the cvc number. The total amount due appears at the button of the modal above the submit button to submit payment for the order. Once the payment has been submitted a second modal will apear thanking the customer for their order and let them know when their order will be ready for pick up. At the bottom of the page is the footer, with where to find us on the web, our phone number, email, a clickable link for our "Online Order Policy" and a clickable link to find our location. The pizza icon is the link to the admin page.
 2. Once the user clicks on the "location" link they will see the location page. At the top of the location page is the nav bar. Within the nav bar are links to home page and the sign-in modal. The image of a pizza at the top of the nav bar is clickable and will take the user back to the home page when clicked. If the user clicks "Sign In", a modal will appear with areas to input the user email address and password. You will then see a blurb on how we move on the hour if we move at all. There is a map located under the blurb to show where we are located at that time. At the bottom of the page is the footer, with where to find us on the web, our phone number, email, a clickable link for our "Online Order Policy" and a clickable link to find our location. The pizza icon is the link to the admin page.
 3. THE ADMIN PAGE once you sign in by clicking on the pizza icon. You use email [admin@gmail.com], and the password is [adminOne]. You are able to go to the admin page and review the Current Orders and once you push complete it will go down to the Previous Orders. You can click on the Previous Orders and see what was ordered, you also have the option to delete it. You Sign Out of the Admin Page by clicking the Sign Out in the NavBar.


## References ##

1. Wikipedia
2. Alysha Eppard
3. light House

1. I used wikipedia to get some of the images I used in my project.

2. Alysha helped me when I would not be able to figure out how to target something and how to utilize the logic I needed and get my admin side running the way I wanted.

3. Light House had some images I used.


