import { Container, Spinner } from "react-bootstrap";
import AlbumPageHeroSection from "./AlbumPageHeroSection";
import AlbumPageMainSection from "./AlbumPageMainSection";
import AlbumPageFixedSection from "./AlbumPageFixedSection";
import AlbumPageRelatedSection from "./AlbumPageRelatedSection";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumAction } from "../redux/actions";
import { useEffect } from "react";

const AlbumPage = () => {
  const dispatch = useDispatch();
  const album = useSelector((state) => state.album.content);
  useEffect(() => {
    dispatch(getAlbumAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {album ? (
        <Container fluid>
          <div className="d-flex gap-5">
            <div className="d-flex flex-column flex-grow-1">
              <AlbumPageHeroSection />
              <AlbumPageMainSection />
            </div>
            <AlbumPageFixedSection />
          </div>
          <AlbumPageRelatedSection />
        </Container>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
};

export default AlbumPage;
