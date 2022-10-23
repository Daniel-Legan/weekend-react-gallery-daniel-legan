import { useState } from 'react';

function PostForm({ postImage }) {

    const [newImagePath, setNewImagePath] = useState('');
    const [newImageDescription, setNewImageDescription] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // NEW OBJECT      
        let newImage = {
            path: newImagePath,
            description: newImageDescription,
        };

        // ADD NEW OBJECT TO GALLERY
        console.log(newImage);
        postImage(newImage);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <span>
                    {/* INPUT IMAGE PATH */}
                    <label>Path:</label>
                    <input
                        type="text"
                        placeholder="path"
                        onChange={(evt) => setNewImagePath(evt.target.value)}
                        value={newImagePath}
                    />
                </span>
                <span>
                    {/* INPUT IMAGE DESCRIPTION */}
                    <label>Description:</label>
                    <input
                        type="text"
                        placeholder="description"
                        onChange={(evt) => setNewImageDescription(evt.target.value)}
                        value={newImageDescription}
                    />
                    {/* SUBMIT FORM BUTTON */}
                    <button type="submit">Submit</button>
                </span>

            </form>
        </>
    );
}

export default PostForm;