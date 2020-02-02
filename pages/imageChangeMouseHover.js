import React from 'react';
import ImageToggleOnMouseHover from '../src/imageToggleMouseHover';

const ImageChangeMouseHover = () => {
  return (
    <div>
      {/* <ImageToggleOnMouseHover
        primaryImg="/static/bw/guitar.jpg"
        secondaryImg="/static/guitar.png"
        alt="guitar"
      /> */}
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseHover
        primaryImg="/static/bw/flower.jpg"
        secondaryImg="/static/flower.png"
        alt="flower"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseHover
        primaryImg="/static/bw/flower.jpg"
        secondaryImg="/static/flower.png"
        alt="flower"
      />
    </div>
  );
};

export default ImageChangeMouseHover;
