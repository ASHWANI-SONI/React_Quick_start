<h1>Points to kept in mind</h1>
<ul>
<li>React component names must always start with a capital letter, while HTML tags must be lowercase.</li>
<li>export default keywords specify the main component in the file.</li>
<li>JSX is stricter than HTML. You have to close tags like <br />.</li>
<li>You have to wrap them into a shared parent, like a div tags or '<>' this.</li>
<li>if we have a lot of html to be converted to jsx we can to that using https://transform.tools/html-to-jsx</li>
<li>for Comments {/*Comments*/}</li>
<li>style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces. </li>
<li>Go to ConditionalRendering.js to know different approaches regarding conditions</li>
<li>Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.</li>
<li>You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].</li>
<li>Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). I</li>
<li> In React, it’s conventional to use onSomething names for props which represent events and handleSomething for the function definitions which handle those events.</li>
<li> (You can read the ...history spread syntax as “enumerate all the items in history”.)</li>
<li>It’s strongly recommended that you assign proper keys whenever you build dynamic lists. If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.</li>
<li>If no key is specified, React will report an error and use the array index as a key by default</li>
<li>On how to develop React-app on github pages: https://github.com/gitname/react-gh-pages</li>
</ul>