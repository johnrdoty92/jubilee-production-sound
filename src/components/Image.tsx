import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const Image = ({src, alt}: {src: string, alt: string}) => {
  return (
    <Zoom>
      <img
        alt={alt}
        src={src}
      />
    </Zoom>
  );
};