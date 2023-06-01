import { useState } from "react";

function BlogPost({cardData, id, setCardList}) {
    const [card, setCard] = useState(cardData);

    let plus = () => {
        setCard(function(prev) {
            let temp = {...prev};
            temp.amount += 1 
            return temp
        });
    }

    let minus = () => {
        setCard(function(prev) {
            let temp = {...prev};
            if (temp.amount > 0) {
                temp.amount -= 1 
            }
            return temp
        });
    }

    let favouriteHandler = () => {
        setCard(prev => {
            let temp = {...prev};

            temp.favourite = !temp.favourite
            return temp
        })
    }

    return (
        <div className="card">
            <div className="favourite">
                {
                    card.favourite?
                    <img onClick={favouriteHandler} src="/img/ActiveLike.svg" alt="alt"></img> :
                    <img onClick={favouriteHandler} src="/img/noneActiveLike.svg" alt="alt"></img>
                }
            </div>
            <img
                src='/img/1.png'
                alt="tatooMashine"
            />
            <div className="card_content">
                <div className="card_content__title">
                    <h4>{card.model}</h4>
                </div>
                <div className="price">
                    <h4>{card.price}₽</h4>
                </div>
                <div className="card_content__other">
                    <div className="couters">
                        <div className="amout">
                            <button className="minus" onClick={minus}>-</button>
                            <span className="vnt">
                                {card.amount} шт 
                                <p>в корзине</p>
                            </span> 
                            <button className="plus" onClick={plus}>+</button>
                        </div>
                        <div>
                            {
                                card.amount > 0 
                                ?
                                <p className="price">
                                    {card.price * card.amount}₽
                                </p> 
                                :
                                <p className="price">0</p>
                            }
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default BlogPost;