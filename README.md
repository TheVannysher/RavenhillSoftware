# Ravenhill vineyard management app

Hello there, this is a personnal project I am building to learn and add to my portfolio.
There is a lot to do and it is open source. I still have to figure out wich license I want to use.
But in the meantime, do or take whatever you need as long as it is not for commercial use. 

The goal of this application is to manage a vineyards.
Concepts:
- tasks
- users
- vines
  - variety
- block (set of vines of the same variety in one yard)
  
I'll do my best to add documents to outline the project scope in the `doc` folder.


Everything you need for the web-client is in `web-app`. 
It is a simple angular application that interact directly with a firestore database as of right now.
once it is functionnal, the next step will be to integrate an api that acts as a middle man between the client and the database.
