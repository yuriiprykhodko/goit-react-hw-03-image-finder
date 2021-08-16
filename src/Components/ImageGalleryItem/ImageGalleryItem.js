import './ImageGalleryItem.css';

const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => (
  <li key={id} className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt={tags}
      data-url={largeImageURL}
      className="ImageGalleryItemImage"
    ></img>
  </li>
);

export default ImageGalleryItem;
