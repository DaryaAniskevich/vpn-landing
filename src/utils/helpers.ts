import { MutableRefObject } from "react";

export const scrollView = (ref: MutableRefObject<null> | null) => {
  if (ref && ref?.current) {
    (ref.current as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }
};
