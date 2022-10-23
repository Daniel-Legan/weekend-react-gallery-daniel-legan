import { useState } from 'react';
import Button from '@mui/material/Button';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


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

        postImage(newImage);
        
        setNewImagePath('');
        setNewImageDescription('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <span>
                    {/* INPUT IMAGE PATH */}
                    <label><b>Path:</b></label>
                    <input
                        className="path"
                        type="text"
                        placeholder="e.g. images/IMG_3672.jpeg"
                        onChange={(evt) => setNewImagePath(evt.target.value)}
                        value={newImagePath}
                        required
                    />
                </span>
                <span>
                    {/* INPUT IMAGE DESCRIPTION */}
                    <label><b>Description:</b></label>
                    <input
                        className="description"
                        type="text"
                        placeholder="description"
                        onChange={(evt) => setNewImageDescription(evt.target.value)}
                        value={newImageDescription}
                    />
                    {/* SUBMIT FORM BUTTON */}
                    <Button variant="contained" type="submit">Submit</Button>
                </span>

            </form>
        </>
    );
}

export default PostForm;