function handleFormSubmit(event) {
    event.preventDefault();
    console.log("FormSubmit");
}
export default function MyForm() {
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Write Something" /> 
                <br />
                <br />
                <button >Submit Now</button>
            </form>
        </div>
    )
}