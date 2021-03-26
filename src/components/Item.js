import React from 'react'

export default function Item({ item }) {
    let date = new Date(item.first_release_date);
    let rating = Math.floor(parseInt(item.rating) / 10)
    return (
        <div className="item" key={item.id}>
            <div className="item__img">

            </div>
            <div className="item__info">
                <div className="item__info__text">
                    <h2>{item.name}</h2>
                    <p>Release Date: {date.toLocaleDateString()}</p>
                    <br />
                    <p>[Summary] {item.summary}</p>
                </div>
            </div>
            <div className="item__rating">
                {rating}
            </div>
        </div>
    )
}
