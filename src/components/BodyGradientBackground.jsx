/* eslint-disable react/prop-types */
function BodyGradientBackground({ width, height = 0 }) {
  return (
    <div
      className="shape-gradient"
      style={{ width: `${width}rem`, height: `${width + height}rem` }}
    ></div>
  );
}

export default BodyGradientBackground;
