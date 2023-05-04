import Card from "components/Card";


function App() {

    const cards = Array(10).fill(0);

    return (
        <section className="App">
            {
                cards.map(
                    (_, i) =>
                        <Card key={i} number={i + 1}/>
                )
            }
        </section>
    )
}

export default App
