import Computer from "./contents/Computer";
import Music from "./contents/Music";
import Movie from "./contents/Movie";

const Detail = (props) => {
  const { contentIndex, changeViewMode } = props;
  return (
    <div>
      {contentIndex === 1 && <Computer />}
      {contentIndex === 2 && <Music />}
      {/* {contentIndex === 3 && <Movie />} */}
      <div>
        <button onClick={changeViewMode}>概要へ</button>
      </div>
    </div>
  );
};

export default Detail;
