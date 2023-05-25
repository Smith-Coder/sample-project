function Message(){
     const name = 'Chuuuuuubaaaaaa';
     const name2= 'Chuuuuuubaaaaaa';
     const lowercaseString1 = name.toLowerCase();
     const lowercaseString2 = name2.toLowerCase();
    if (lowercaseString1==lowercaseString2)
    return(
        <div>
            <h1>Hello this is Message component</h1>
            <h2>{name} you are the best!s!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h2>
        </div>
    );
    return(
        <div>
            <h1>Hello this is Message component</h1>
            <h2>Smith you are the best!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</h2>
        </div>
    );

}
export default Message;