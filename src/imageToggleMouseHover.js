import React, {useRef} from 'react';

const ImageToggleOnMouseHover = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      ref={imageRef}
      alt=""
      width="30%"
    />
  );
};

export default ImageToggleOnMouseHover;
