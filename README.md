# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When entering an address into a browser, it can be summarized as a program requesting specific information from a server. A more simplified explanation could even describe it as one computer requesting information from another computer. A server can be described as a computer that is dedicated to hosting information for clients. In this case we are the client using the browser program to get the information a host server is storing to the address https://www.techtonic.com/. This domain name is another way to label an IP address where the information the client is looking for is hosted. “Https://” is the protocol that informs the browser what language to read the incoming information in, and “www.techtonic.com/” is the true aforementioned domain/IP address. The information your browser receives is a document written in HTML that the browser can display.

## From start to finish, how does data reach you to be rendered in the browser?

In a browser, once you’re connected to the web, you can request information for a web document. Browsers commonly use a protocol to retrieve information from a server that is likely hosting information sent from another computer. A server may need to redirect the request from your browser to another server, but once the information is found, the document’s information is sent by the server to your browser. If the document was sent in the correct language, the browser can read the document and render it in the browser.

## What code is rendered in the browser?

The browser initially takes the HTML code from the file and translates it into raw bytes to work with in a Document Object Model or DOM. It can read the characters from HTML in DOM and will request any CSS code used in the HTML file as it’s rendering in from DOM. The CSS code is gathered and read from CSSOM and the browser renders from both DOM and CSSOM to display for its user. Javascript can modify CSS code or HTML code so the browser will render this code from either CSSOM or DOM or both to display.

## What is the server-side code’s main function?

Server-side code is primarily for rendering pages for the client. It needs to be able to run on a server to interact with databases and process a page when it is posted back to the server. A server can look at who is requesting a page and process a dynamic web page that will best display for the client’s browser. These dynamic pages often render Javascript on the server side to create HTML code for the client. Static pages don’t go through this process and wont need code server-side to access information from another source for a client. Although not a main function, security and debugging is often heavily done on the server-side as well.

## What is the client-side code’s main function?

Client-side code’s main function is to run a language than can be read by a browser to display for the client. The client’s browser should focus on having code to interpret the modern language a web document is sent in to have the best experience for the user. If the client-side code can run the scripts it receives then I believe its main function is covered.

## What is runtime?

Runtime is the duration of time a program is active after it is opened and before the program is closed. It is the period of time a program is running.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I wasn’t familiar with instances until running into this question. I’m feeling like my knowledge base isn’t enough to search for the correct way to answer this question. Client-side and server-side assets work together so my instincts are to believe there will not be a limit to the number of assets that can be created client-side. From what I learned, clients strain on hosts for their instances so it doesn’t seem like client-side assets create a strain on the client.

https://microservices.io/patterns/client-side-discovery.html

https://stackoverflow.com/questions/11077885/what-is-the-maximum-number-of-instance-variables-that-a-java-class-should-have

## How many instances of the server-side code are available at any given time?

Researching this topic was difficult for me because I never found a true limit, but I may be misunderstanding the question. Understanding Instances are new to me but auto-scaling with amazon was a reference point for what could be available server side for the number of instances available. Providing an option to have a maximum number of instances set to 4 is implied to be reasonable but I was able to find resources which referenced 20-25 instances as a desire for their server-side code. Are there limits to this? I’m also considering that my interpretation is off and only one instance is available at a given time.

https://docs.oracle.com/cd/E19159-01/819-3671/geolm/index.html

https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html

## How many instances of the databases connected to the server application are created?

From what I researched it seems like there is only one instance from the server application to the database created.

“An Oracle instance can access only one database at a time, while an Oracle database can be accessed by multiple instances”

“An instance of the database is a snapshot of the actual content at any given time, including the data itself and its relationship to other data in the database.”

“A database can be opened (or mounted) by more than one instance, however, an instance can open at most one database.”

https://www.lifewire.com/database-instance-1019612

https://serverfault.com/questions/11746/what-is-a-sql-server-instance

http://www.adp-gmbh.ch/ora/misc/database_vs_instance.html
