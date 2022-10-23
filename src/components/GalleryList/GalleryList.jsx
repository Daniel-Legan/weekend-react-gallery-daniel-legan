import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery, updateLikes }) {
    // updateLikes is the axios call
    // continue to ship it to each GalleryItem as a prop
    return (
        <>
            <main className="list">
                {gallery.map(item => (
                    <GalleryItem
                        key={item.id}
                        item={item}
                        updateLikes={updateLikes}
                    />
                ))}
            </main>
        </>
    );
}

export default GalleryList;