function GalleryItem({ item }) {
    return (
        <>
            <li>{item.id}</li>
            <img src={item.path} />
            <li>{item.description}</li>
            <li>{item.likes}</li>
        </>
    );
}

export default GalleryItem;