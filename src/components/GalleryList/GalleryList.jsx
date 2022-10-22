import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery }) {
    return (
        <>
            <main>
                {gallery.map(item => (
                    <GalleryItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </main>
        </>
    );
}

export default GalleryList;