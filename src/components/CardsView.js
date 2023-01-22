import React from 'react';

function CardView({ cards }) {
    console.log(cards)
    return (
        <div className="card-container">
            {cards.map((card) => {
                return (
                    <div
                        key={card.img}
                        className="card-container-item"
                        style={{ backgroundImage: "url(" + card.img + ")" }}
                    >
                        <div className="title">{card.name}</div>
                        <div className="color">{card.color}</div>
                        <div className="add-bucket">
                            <div className="price">$ {card.price}</div>
                            <div className="bth">Add to cart</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default CardView;