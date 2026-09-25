"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  className: string;
  sizes: string;
};

export default function ImageLightbox({ src, alt, className, sizes }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = () => {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${className} image-lightbox-trigger`}
        onClick={() => setOpen(true)}
        aria-label={`Ingrandisci ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes={sizes} />
        <span className="image-lightbox-hint" aria-hidden="true">Ingrandisci</span>
      </button>

      <dialog
        ref={dialogRef}
        className="image-lightbox-dialog"
        aria-label={`Immagine ingrandita: ${alt}`}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        <button type="button" className="image-lightbox-close" onClick={close} aria-label="Chiudi immagine ingrandita">
          ×
        </button>
        <div className="image-lightbox-stage">
          <Image src={src} alt={alt} fill sizes="95vw" priority={false} />
        </div>
      </dialog>
    </>
  );
}
