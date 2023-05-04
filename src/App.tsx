import {v4 as uuidv4} from 'uuid';

import Card from "components/Card";


function App() {

    const cards = Array(10).fill(0);

    return (
        <section className="App">
            {
                cards.map(
                    (_, index) =>
                        <Card key={uuidv4()} number={index + 1}/>
                )
            }
        </section>
    )
}

export default App
