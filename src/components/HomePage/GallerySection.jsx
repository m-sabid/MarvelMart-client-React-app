import axios from "axios";
import { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";

const GallerySection = () => {
  const [images, setImages] = useState([]);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=marvel-hulk&orientation&per_page=18&client_id=MbE1XMj7pdRElJnfBN5e6QwLAPi9WegETpvvo5W92_Y";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data.results;
        const formattedImages = data.map((image) => ({
          src: image.urls.regular,
          thumbnail: image.urls.thumb,
        }));
        setImages(formattedImages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="my-8 sm:my-16">
      <h1 className="text-2xl text-center font-bold mb-4">Image Gallery</h1>
      <div className="border rounded-lg shadow-lg">
        <Gallery
          images={images}
          showLightboxThumbnails
          enableImageSelection={false}
          margin={5}
          backdropClosesModal
          imageCountSeparator=" of "
          className="justify-center"
        />
      </div>
    </div>
  );
};

export default GallerySection;
