function GalleryItem({ item }) {
    return (
        <>
            <div>
                {/* <li>{item.id}</li> */}
                <img src={item.path} />
                {/* <li>{item.description}</li> */}
                <div>{item.likes} people love this</div>
            </div>
        </>
    );
}

export default GalleryItem;