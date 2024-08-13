function someThing(){
    console.log("Button clicked")
}
function myHover(){
    console.log("Hover On")
}

export default function Button() {
    return (
        <div>
            <button onClick={someThing}>Click Me</button>    
            <button onMouseOver={myHover}>Hover Me</button>    
        </div>
    )
}