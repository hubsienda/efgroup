/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  gallery: GalleryImage[];
  initialIndex: number;
  className: string;
};

export default function ImageLightbox({ gallery, initialIndex, className }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const triggerImage = gallery[initialIndex];
  const activeImage = gallery[activeIndex];
  const hasNavigation = gallery.length > 1;

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
        <img src={triggerImage.src} alt={triggerImage.alt} />
        <span className="image-lightbox-hint" aria-hidden="true">+</span>
      </button>

      <dialog
        ref={dialogRef}
        className={`image-lightbox-dialog${hasNavigation ? "" : " image-lightbox-dialog-single"}`}
        aria-label={`Galleria fotografica: ${activeImage.alt}`}
        onClose={() => {
          setOpen(false);
          window.requestAnimationFrame(() => triggerRef.current?.focus());
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        onKeyDown={(event) => {
          if (!hasNavigation) return;
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
        {hasNavigation && (
          <button type="button" className="image-lightbox-nav image-lightbox-prev" onClick={previous} aria-label="Foto precedente">
            ‹
          </button>
        )}
        <div className="image-lightbox-stage" onClick={close}>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="image-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
        {hasNavigation && (
          <button type="button" className="image-lightbox-nav image-lightbox-next" onClick={next} aria-label="Foto successiva">
            ›
          </button>
        )}
        {hasNavigation && (
          <div className="image-lightbox-caption" aria-live="polite">
            <span>{activeImage.alt}</span>
            <span>{activeIndex + 1} / {gallery.length}</span>
          </div>
        )}
      </dialog>
    </>
  );
}
