import { useState } from 'react';

export default function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count + 1);
        // alert('you clicked me');
    }
    return (
        <button onClick={handleClick}>Clicked {count} times</button>
    );
}