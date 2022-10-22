import React, { useState } from 'react';

function GalleryItem({ item, updateLikes }) {
    const [view, setView] = useState(true);

    // Inline If/Else with Logical && Operator
    return (
        <>
            <div className="item">
                {view &&
                    <img onClick={() => { setView(!view) }} src={item.path} />
                }
                {!view &&
                    <p onClick={() => { setView(!view) }}>{item.description}</p>
                }
                {/* <div onClick={() => { setView(!view) }}>CLICK HERE</div> */}
                <div>
                    <button onClick={() => { updateLikes(item.id) }}>like it</button>
                </div>
                <div>{item.likes} people like this</div>
            </div>
        </>
    );
}

{/* <button onClick={() => { (rockCount === 0) ? setRockCount(0) : setRockCount(rockCount - 1) }}>Decrease</button> */ }

export default GalleryItem;