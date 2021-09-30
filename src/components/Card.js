import React from "react";

const Poke = ({name, abilities, id}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{abilities}</p>
            </div>
        </div>
    );
}

export default Card;