import { useState } from "react";
import cards from "../data/cards-data";
import BlogPost from "./Blogpost";

function Main() {
    let [cardList, setCardList] = useState(cards);

    
    return (
        <main>
            <section className="cards">
                {cardList.map((card, idx) => <BlogPost setCardList={setCardList}  cardData={card} id={idx} key={idx}/>)}
            </section>
        </main>
    )
}

export default Main;
