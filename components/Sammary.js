const Sammary = (props) => {
  const { changeViewMode } = props;

  return (
    <div>
      <div>
        <p>I love software engineering</p>
        <div>description</div>
        <div>
          <button onClick={() => changeViewMode(1)}>詳細へ</button>
        </div>
      </div>
      <div>
        <p>I love music and the piano</p>
        <div>description</div>
        <div>
          <button onClick={() => changeViewMode(2)}>詳細へ</button>
        </div>
      </div>
      <div>
        <p>I love movie and animation</p>
        <div>description</div>
        <div>
          <button onClick={() => changeViewMode(3)}>詳細へ</button>
        </div>
      </div>
    </div>
  );
};

export default Sammary;
