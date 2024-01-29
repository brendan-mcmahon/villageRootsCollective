import "./Teachers.scss";

export default function Teacher({ bio, profilePic, pic1, pic2 }) {
  return (
    <div id="teacher">
      <div className="imageContainer circle">
        <img src={profilePic} alt="Mrs. K" />
      </div>
      <h1>{bio.name}</h1>
      <div className="blurbs">
        <div className="blurb">
          <article>
            <img src={pic1} alt="pic 1" /> {bio.blurb1}
          </article>
        </div>
        <div className="blurb">
          <article>
            <img src={pic2} alt="pic 2" /> {bio.blurb2}
          </article>
        </div>
        <div className="blurb">
          <h2>My Favorites</h2>
          <ul>
            {bio.favorites.map((favorite, i) => (
              <li key={i}>
                <strong>{favorite.category}:</strong>
                {favorite.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
