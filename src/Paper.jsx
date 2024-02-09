import "./Paper.scss";


// Dude, just make the SVGs into image files and use them as background images.
// Check the performance, even though I don't know how to do that.
// Also, idk if this will work for text? I think there's a way though.

const colors = {
  yellow: "#f3bc06",
  green: "#a1b37d",
  black: "#011917",
  white: "#fffeed",
};

function Scrap(props) {
  return (
    <div className="container">
      <div className="paper-container">
        <div className="paper green"></div>
        <div className="child-container">{props.children}</div>
      </div>
    </div>
  );
}

const Paper = () => {
  // zooming by 250% seems to make this look a little better / more subtle
  const paper = (name, color) => (
    <svg>
      <filter id={`${name}-paper`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.04" result="noise" numOctaves="5" />

        <feDiffuseLighting in="noise" lightingColor={color} surfaceScale="1.5">
          <feDistantLight azimuth="45" elevation="60" />
        </feDiffuseLighting>
      </filter>
    </svg>
  );

  const yellowPaper = paper("yellow", colors.yellow);
  const greenPaper = paper("green", colors.green);
  const blackPaper = paper("black", colors.black);
  const whitePaper = paper("white", colors.white);

  return (
    <>
      {yellowPaper}
      {greenPaper}
      {blackPaper}
      {whitePaper}
      <Scrap>
        <h1>Do it.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, voluptates molestias vitae ea esse iusto
          eveniet laborum perspiciatis soluta sint dignissimos. Error ab mollitia reiciendis voluptatem a consectetur
          nihil facilis.
        </p>
      </Scrap>
    </>
  );
};

export default Paper;
