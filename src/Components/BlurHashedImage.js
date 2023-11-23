import { Blurhash } from "react-blurhash";
import { useEffect, useRef, useState } from "react";

export default function BlurHashedImage(props) {

  const { hash, width, height, src } = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [parentWidth, setParentWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setParentWidth(containerRef.current.clientWidth);
    }
  }, [])

  return (
    <div className="relative" ref={containerRef}>
      <Blurhash
        className={`absolute top-0 left-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        hash={hash}
        height={parentWidth / width * height} width={parentWidth} />
      <img
        className={`absolute top-0 left-0 transition-opacity duration-500 ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
        src={src}
        height={height}
        width={width}
        alt={props.alt}
        onLoad={() => setIsLoaded(true)} />
    </div>
  )
}