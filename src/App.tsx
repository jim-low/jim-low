import './App.css';

const App = () => {
    function handleRickRoll() {
        window.location.href = "https://www.youtube.com/watch?v=uHgt8giw1LY"
    }

    return (
        <div className="app">
            <h1>Hello world, Welcome to Jim's React Page</h1>
            <button onClick={handleRickRoll}>click me</button>
        </div>
    );
}

export default App;
