import React, { useRef, useEffect, JSX } from "react";
import gsap from "gsap";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import * as S from "./styles";

export default (
  isOpen: boolean,
  status: string,
  timeout: number,
  handleClose: () => void
) => {
  const snackRef = useRef<HTMLDivElement>(null);
  const counterBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Animation to show the snackbar
      gsap.to(snackRef.current, {
        duration: 0.5,
        scale: 1,
        ease: "power3.out",
      });

      // Animation to show the counter bar
      gsap.to(counterBarRef.current, {
        duration: timeout,
        width: 0,
        ease: "linear",
      });

      // Fecha o snackbar após o timeout
      const closeTimeout = setTimeout(() => {
        handleClose();
      }, timeout * 1000);

      return () => clearTimeout(closeTimeout);
    } else {
      // Animation to hide the snackbar
      gsap.to(snackRef.current, {
        duration: 0.5,
        scale: 0,
        ease: "power3.out",
      });

      // Animation to hide the counter bar
      gsap.to(counterBarRef.current, {
        duration: 0.5,
        width: "100%",
        ease: "linear",
      });
    }
  }, [isOpen, timeout, handleClose]);

  const handleSatusIcons = (): JSX.Element => {
    switch (status) {
      case "success":
        return <CheckCircleIcon className={S.IconInformationBlack} />;
      case "error":
        return <ExclamationCircleIcon className={S.IconInformationWhite} />;
      case "warning":
        return <ExclamationTriangleIcon className={S.IconInformationBlack} />;
      default:
        return <InformationCircleIcon className={S.IconInformationBlack} />;
    }
  };

  return {
    snackRef,
    counterBarRef,
    handleSatusIcons,
  };
};
