import { type PropsWithChildren } from "react";

type ImageProps = {
  src: string;
  alt: string;
}

type HeaderProps = PropsWithChildren<{ image: ImageProps }>

export default function Header(
  { image, children }: HeaderProps,
) {
  return (
    <header>
      {/* <img src={image.src} alt={image.src} /> */}
      <img {...image} />
      {children}
    </header>
  )
};