function MainContent() {
    return (
        <h1> I'm learning React! </h1>       
    ) 
}
ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)
