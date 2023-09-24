import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import AlbumPageSingleTrack from "./AlbumPageSingleTrack";

const AlbumPageMainSection = () => {
  const album = useSelector((state) => state.album.content);
  return (
    <Container fluid>
      <Row className="mb-3">
        <Col
          style={{ minWidth: "200px", fontWeight: "bold", paddingLeft: "30px" }}
        >
          Name
        </Col>
        <Col xs={2} className="tx-center fw-bold" style={{ minWidth: "120px" }}>
          Duration
        </Col>
        <Col xs={1} className="tx-center fw-bold" style={{ minWidth: "60px" }}>
          Play
        </Col>
        <Col xs={2} className="tx-center fw-bold" style={{ minWidth: "140px" }}>
          Price
        </Col>
      </Row>
      <div className="d-flex flex-column gap-2">
        {album.tracks.data.map((track) => (
          <Row className="align-items-center py-2 track">
            <AlbumPageSingleTrack track={track} key={`track-${track.id}`} />
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default AlbumPageMainSection;
