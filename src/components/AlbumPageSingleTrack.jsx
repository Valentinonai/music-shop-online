import { Col } from "react-bootstrap";

const AlbumPageSingleTrack = ({ track }) => {
  return (
    <>
      <Col style={{ minWidth: "200px", paddingLeft: "30px" }}>
        {track.title}
      </Col>
      <Col xs={2} className="tx-center" style={{ minWidth: "120px" }}>
        {track.duration}
      </Col>
      <Col xs={1} className="tx-center" style={{ minWidth: "60px" }}>
        <i className="bi bi-play-fill pointer"></i>
      </Col>
      <Col xs={2} className="tx-center" style={{ minWidth: "140px" }}>
        <div className="d-flex justify-content-center gap-3">
          4.99$ <i className="bi bi-cart pointer"></i>
        </div>
      </Col>
    </>
  );
};

export default AlbumPageSingleTrack;
