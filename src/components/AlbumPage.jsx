import { Container } from "react-bootstrap";
import AlbumPageHeroSection from "./AlbumPageHeroSection";
import AlbumPageMainSection from "./AlbumPageMainSection";
import AlbumPageFixedSection from "./AlbumPageFixedSection";
import AlbumPageRelatedSection from "./AlbumPageRelatedSection";

const AlbumPage = () => {
  return (
    <Container fluid>
      <div className="d-flex">
        <div className="d-flex flex-column flex-grow-1">
          <AlbumPageHeroSection />
          <AlbumPageMainSection />
        </div>
        <AlbumPageFixedSection />
      </div>
      <AlbumPageRelatedSection />
    </Container>
  );
};

export default AlbumPage;
