import { Button, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const AlbumPageHeroSection = () => {
  const album = useSelector((state) => state.album.content);

  //Per rendere una prima lettera da minuscola a maiuscola
  const capFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="d-flex gap-4 m-0 py-4">
      <Image src={album.cover_medium} alt="img" fluid />
      <div className="d-flex flex-column flex-grow-1 justify-content-around">
        <div className="d-flex flex-column">
          <h1 style={{ width: "fit-content" }}>{album.title}</h1>
          <h5>{album.artist.name}</h5>
        </div>
        <div className="d-flex align-items-end justify-content-between">
          <div className="d-flex flex-column">
            <p>{capFirstLetter(album.type)}</p>
            <p>{album.nb_tracks} Items</p>
            <p>{new Date(album.release_date).toLocaleDateString()}</p>
            <div className="d-flex gap-2">
              {/* start not filled
            <i className="bi bi-star"></i> */}

              {/* star half filled
            <i className="bi bi-star-half"></i> */}
              <div className="d-flex">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>({album.fans})</p>
            </div>
          </div>
          <div className="d-flex gap-1" style={{ marginRight: "35px" }}>
            <div className="price">4.99$</div>
            <Button className="my-btn">Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPageHeroSection;
