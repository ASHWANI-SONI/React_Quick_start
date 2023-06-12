function mybutton(){
    return(
        <button>button1</button>
    );
}

export default function myApp(){
    return (
        <div>
            <h1>
                Welcome to my app.
            </h1>
            <mybutton />
        </div>
    );
}