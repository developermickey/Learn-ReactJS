function someThing(){
    console.log("Button clicked")
}
function myHover(){
    console.log("Hover On")
}

function handleClick(event) {
    console.log("Hello World");
    console.log(event);
}

export default function Button() {
    return (
        <div>
            <button onClick={someThing}>Click Me</button>    
            <button onMouseOver={myHover}>Hover Me</button>    
            <button onClick={handleClick}>Click Me</button>    
        </div>
    )
}