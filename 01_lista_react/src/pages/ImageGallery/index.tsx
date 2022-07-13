import './styles.css';

function ImageGallery() {
  const urlSingleImage =
    'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

  const baseUrlImageCarousel = 'https://source.unsplash.com/random/?';

  const listUrlImageCarousel = [
    'city',
    'night',
    'computer',
    'dance',
    'music',
    'heart',
    'place',
    'sun',
    'fashion',
    'police',
    'rain',
    'water',
  ];

  return (
    <div className="App">
      <div className="singleImageContainer">
        <img
          src={urlSingleImage}
          alt="image react app"
          className="singleImage"
        />
      </div>

      <div className="imageCarouselContainer">
        {listUrlImageCarousel.map((url, key) => {
          return (
            <img
              src={baseUrlImageCarousel + url}
              alt={url}
              className="imageCarousel"
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageGallery;
