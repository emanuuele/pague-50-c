export default function Title({ label, onclick }) {
  return (
    <>
      <div className="title">
        <a style={{display: 'flex'}} href="/home">
          <img src="img/home.svg" alt="" />
        </a>
        <h2>{label}</h2>
        <button className="add" onClick={onclick}>
          <img src="img/plus.svg" alt="" />
        </button>
      </div>
    </>
  );
}
