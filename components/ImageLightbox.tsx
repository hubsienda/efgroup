"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  gallery: GalleryImage[];
  initialIndex: number;
  className: string;
  sizes: string;
};

export default function ImageLightbox({ gallery, initialIndex, className, sizes }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const triggerImage = gallery[initialIndex];
  const activeImage = gallery[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
  }, [open]);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const close = () => {
    dialogRef.current?.close();
  };

  const previous = () => {
    setActiveIndex((index) => (index - 1 + gallery.length) % gallery.length);
  };

  const next = () => {
    setActiveIndex((index) => (index + 1) % gallery.length);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${className} image-lightbox-trigger`}
        onClick={() => openAt(initialIndex)}
        aria-label={`Ingrandisci ${triggerImage.alt}`}
      >
        <Image src={triggerImage.src} alt={triggerImage.alt} fill sizes={sizes} />
        <span className="image-lightbox-hint" aria-hidden="true">Ingrandisci</span>
      </button>

      <dialog
        ref={dialogRef}
        className="image-lightbox-dialog"
        aria-label={`Galleria fotografica: ${activeImage.alt}`}
        onClose={() => {
          setOpen(false);
          window.requestAnimationFrame(() => triggerRef.current?.focus());
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            previous();
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            next();
          }
        }}
      >
        <button type="button" className="image-lightbox-close" onClick={close} aria-label="Chiudi galleria">
          ×
        </button>
        <button type="button" className="image-lightbox-nav image-lightbox-prev" onClick={previous} aria-label="Foto precedente">
          ‹
        </button>
        <div className="image-lightbox-stage">
          <Image src={activeImage.src} alt={activeImage.alt} fill sizes="95vw" priority={false} />
        </div>
        <button type="button" className="image-lightbox-nav image-lightbox-next" onClick={next} aria-label="Foto successiva">
          ›
        </button>
        <div className="image-lightbox-caption" aria-live="polite">
          <span>{activeImage.alt}</span>
          <span>{activeIndex + 1} / {gallery.length}</span>
        </div>
      </dialog>
    </>
  );
}
