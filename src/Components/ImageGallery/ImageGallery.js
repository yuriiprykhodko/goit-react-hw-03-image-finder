import './imageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ hits, onClick }) => {
  return (
    <div>
      <ul className="ImageGallery" onClick={onClick}>
        {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
