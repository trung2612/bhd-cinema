import ReactPlayer from "react-player";
import "./Trailer.scss";

const Trailer = ({urlTrailer}) => {
  return (
    <div className="movie--trailer">
      <ReactPlayer
      className="trailer--player"
        url={urlTrailer||"https://www.youtube.com/watch?v=__Gugj6R8F0"}
        playing={true}
        volume={1}
        width="50vw"
        height="50vh"
        controls	
      />
    </div>
  );
};
export default Trailer;
