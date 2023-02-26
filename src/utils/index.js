/* eslint-disable no-unused-vars */
function compareCheapest(a, b) {
  return a.price - b.price;
}

function compareFastest(a, b) {
  return (
    a.segments[0].duration +
    a.segments[1].duration -
    (b.segments[0].duration + b.segments[1].duration)
  );
}

function compareOptimal(a, b) {
  return (
    a.segments[0].stops.length +
    a.segments[1].stops.length -
    (b.segments[0].stops.length + b.segments[1].stops.length)
  );
}
