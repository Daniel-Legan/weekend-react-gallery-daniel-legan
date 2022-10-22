import React, { useState } from 'react';
function GalleryItem({ item }) {
    const [view, setView] = useState(true);

    // const view = () => {
    //     <img src={item.path}/>
    // }

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
                <button>love it</button>
                </div>
                <div>{item.likes} people love this</div>
            </div>
        </>
    );
}

{/* <button onClick={() => { (rockCount === 0) ? setRockCount(0) : setRockCount(rockCount - 1) }}>Decrease</button> */ }

export default GalleryItem;