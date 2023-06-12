const user = {
    name: 'Hedy Lamarr',
    imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

export default function Profile(){
    return (
        <>
            <h1>{user.name}</h1>
            <img className = 'avatar' src={user.imageURL} alt = {user.name} styles = {
                {
                    width: user.imageSize,
                    height: user.imageSize
                }
            }></img>
        </>
    );
}

{
    /*
    
        return (
            <h1>
                {user.name} //{ escaping character }
            </h1>
        );
     */
}