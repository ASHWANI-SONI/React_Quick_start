<h1>Points to kept in mind</h1>
<ul>
<li>React component names must always start with a capital letter, while HTML tags must be lowercase.</li>
<li>export default keywords specify the main component in the file.</li>
<li>JSX is stricter than HTML. You have to close tags like <br />.</li>
<li>You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:
    "function AboutPage() {
    return (
        <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
        </>
    );
    }"
</li>
<li></li>
</ul>