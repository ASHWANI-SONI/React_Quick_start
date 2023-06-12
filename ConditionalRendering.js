let content;

export default function content(){
    return (
        isLoggedin?(<AdminPanel />): (<LoginForm />)
    );
}

{/* 
    Approaches for conditions
    <div>
      {isLoggedIn && <AdminPanel />}
    </div>
    --> can be used when no else condition is required.
*/}