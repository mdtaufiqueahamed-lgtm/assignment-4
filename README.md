Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById=> pick one element by its id
getElementsByClassName=> pick one element by its class
querySelector=> pick first element that matches any css selector
querySelectorAll=> pick all the element that match any css selector


2. How do you create and insert a new element into the DOM?
Answer: Make a new element < Add text, class, or attributes > Put it on the page using appendChild() or similar.


3. What is Event Bubbling? And how does it work?
Answer: Event bubbling = when you click the element, the event goes up to its parent, then grandparent, all the way up.


4. What is Event Delegation in JavaScript? Why is it useful?
Answer:  1- Instead of adding a click to each child  
        2-you add one click on the parent
        3- Parent checks which child was clicked.
        4- Good for many or dynamic elements.
5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
