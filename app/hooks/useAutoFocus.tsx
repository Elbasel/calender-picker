"use client";

import { useEffect } from "react";

export const UseAutoFocus = (enabled = true) => {
  useEffect(() => {
    if (!enabled) return;
    const allInputHTMLElements = document.querySelectorAll("input");
    if (allInputHTMLElements.length <= 0) return;

    allInputHTMLElements.forEach((inputHTMLElement, i) => {
      // if not last element, don't set autofocus to true
      if (i !== allInputHTMLElements.length - 1) return;
      inputHTMLElement.focus();
    });
  }, [enabled]);
};
