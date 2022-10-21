import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery }) {
    return (
        <>
            {gallery.map(item => (
                <GalleryItem
                    key={item.id}
                    item={item}
                />
            ))}
        </>
    );
}

export default GalleryList;