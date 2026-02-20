"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface CustomImageProps extends Omit<ImageProps, "src"> {
  src?: string | null | undefined;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt = "image",
  className,
  ...props
}) => {
  const fallbackSrc = "/images/no.jpg";
  const [imgSrc, setImgSrc] = useState<string>(fallbackSrc);

  useEffect(() => {
    if (src && src.trim() !== "") {
      setImgSrc(src);
    } else {
      setImgSrc(fallbackSrc);
    }
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default CustomImage;
