import Image from 'next/image';
import React from 'react';

export function getBackgroundImage() {
  return (
    <Image
      width="2592"
      height="1728"
      src="/1.jpg"
      loading="lazy"
      alt=""
      className="absolute inset-0 -z-10 h-screen w-full object-cover"
    />
  );
}
