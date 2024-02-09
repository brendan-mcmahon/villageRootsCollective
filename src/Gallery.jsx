import { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.scss";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

const API_KEY = "AIzaSyDxXl-IIfNs8Q5HzUAxgqV5OLVFNowVVE8";
const FOLDER_ID = "1zXGHGjImCWyIuVokt5b-zWFQNDvzQxGi";
const dateRegex = /(\d{4})(\d{2})(\d{2})[_-](\d{2})(\d{2})(\d{2})/;

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    fetchPublicFiles();
  }, []);

  const fetchPublicFiles = async () => {
    try {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth(); // Month is 0-indexed
      const yearMonthPattern = `${year}${month.toString().padStart(2, "0")}`; // Ensures month is two digits
      const response = await axios.get("https://www.googleapis.com/drive/v3/files", {
        params: {
          key: API_KEY,
          q: `'${FOLDER_ID}' in parents and trashed=false and name contains '${yearMonthPattern}'`,
          fields: "files(name, thumbnailLink, createdTime)",
        },
      });

      const promises = response.data.files.map((file) => {
        const dateMatch = file.name.match(dateRegex);
        let fileDate = new Date();

        if (dateMatch) {
          const [, year, month, day, hour, minute, second] = dateMatch;
          fileDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
        }

        return new Promise((resolve) => {
          const img = new Image();
          img.onload = function () {
            resolve({
              src: file.thumbnailLink.replace("220", "800"),
              name: file.name,
              width: img.width,
              height: img.height,
              date: fileDate,
            });
          };
          img.src = file.thumbnailLink.replace("s220", "s800");
        });
      });

      const photosWithDimensions = await Promise.all(promises);

      const groupedPhotos = photosWithDimensions.reduce((acc, photo) => {
        const monthYear = `${photo.date.toLocaleString("default", { month: "long" })} ${photo.date.getFullYear()}`;
        const existingMonth = acc.find((group) => group.monthYear === monthYear);

        if (existingMonth) {
          existingMonth.photos.push(photo);
        } else {
          acc.push({ monthYear, photos: [photo] });
        }

        return acc;
      }, []);

      setPhotos(groupedPhotos);
    } catch (error) {
      console.error("Error fetching files", error);
    }
  };

  return (
    <div id="gallery-page">
      <div className="header">
          <h2>Photo Gallery</h2>
      </div>
      {photos.map((group, i) => (
        <div key={i}>
          <PhotoAlbum layout="masonry" photos={group.photos} onClick={({ index }) => setIndex(index)} />
        </div>
      ))}
      <Lightbox
        slides={photos.map((group) => group.photos).flat()}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default Gallery;
