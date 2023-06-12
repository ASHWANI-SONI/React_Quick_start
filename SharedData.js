import { useState } from 'react';

export default function MyApp(){
  const [ct, setCt] = useState(0);
    // const [count, setCount] = useState(0);
    function handleClick(){
        setCt(ct + 1);
        // alert('you clicked me');
    }
  return (
    <>
      <MyButton count = {ct} onClick = {handleClick} />
      <MyButton count = {ct} onClick = {handleClick} />
    </>
  );
}

function MyButton({count, onClick}) {
    return (
        <button onClick={onClick}>Clicked {count} times</button>
    );
}