1. How did event.preventDefault() help in handling form submission?
event.preventDefault() stops the browser from reloading the page upon submission. This allowed me to intercept the submit event, run final JavaScript validations, save data to localStorage, and display a success alert dynamically without losing the form's current state.

2. What is the difference between HTML5 and JS validation? Why use both?
HTML5 validation uses built-in attributes (like required and pattern) for basic, automatic checks, but its default popups are generic and hard to style. JavaScript validation allows for complex logic (like ensuring passwords match) and complete UI control. Using both combines HTML5's baseline accessibility with JavaScript's Constraint Validation API to create customized, real-time error messages.

3. Explain how you used localStorage. What are its limitations?
I used localStorage.setItem() upon successful form submission to save the username, and localStorage.getItem() on page load to pre-fill the input field if a saved value exists. 
**Limitations:** localStorage stores data in unencrypted plain text and is vulnerable to Cross-Site Scripting (XSS) attacks. Therefore, it should never be used to store sensitive data like passwords or authentication tokens.

4. Describe a challenge you faced with real-time validation and how you solved it.
I struggled with variable scope when I accidentally closed the DOMContentLoaded event listener too early.

5. How did you ensure custom error messages were user-friendly and timely?
I disabled default browser tooltips using the <form novalidate> attribute and used the Constraint Validation API to inject specific, helpful feedback (e.g., "Username must be at least 3 characters") into dedicated <span> elements. By attaching these checks to the 'input' event rather than 'blur', the form provides immediate, real-time feedback as the user types.