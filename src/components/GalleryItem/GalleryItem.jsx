import React, { useState } from 'react';
import Button from '@mui/material/Button';

function GalleryItem({ item, updateLikes, deleteImage }) {
    const [view, setView] = useState(true);

    return (
        <>
            <div className="item">
                {/* Inline If/Else with Logical && Operator */}
                {view &&
                    <img onClick={() => { setView(!view) }} src={item.path} />
                }
                {!view &&
                    <p onClick={() => { setView(!view) }}>{item.description}</p>
                }
                {/* <div onClick={() => { setView(!view) }}>CLICK HERE</div> */}
                <div>
                    {/* updateLikes is the axios call */}
                    <Button onClick={() => { updateLikes(item.id) }}>like</Button>
                    <Button onClick={() => { deleteImage(item.id) }}>delete</Button>
                </div>

                <div>{(item.likes === 1) ?
                    item.likes + ' person likes this' :
                    item.likes + ' people like this'}
                </div>
            </div>
        </>
    );
}

{/* <button onClick={() => { (rockCount === 0) ? setRockCount(0) : setRockCount(rockCount - 1) }}>Decrease</button> */ }

export default GalleryItem;