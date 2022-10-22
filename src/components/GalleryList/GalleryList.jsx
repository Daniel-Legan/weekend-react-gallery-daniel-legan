import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery, updateLikes }) {
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