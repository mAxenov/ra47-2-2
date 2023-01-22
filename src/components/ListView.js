import React from 'react';


function ListView({ items }) {
    return (
        <div className='container-list'>
            {items.map((item) => {
                return (
                    <div
                        key={item.img}
                        className="card-container-list"
                    >
                        <div className="image-list">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="title-list">{item.name}</div>
                        <div className="color-list">{item.color}</div>
                        <div className="add-bucket-list">
                            <div className="price-list">${item.price}</div>
                            <div className="bth">Add to cart</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default ListView;