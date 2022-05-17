import * as React from "react";
import { isDefined, applyIfTrue } from "./Helpers";

const HamburgerMenu: React.FC = ({ children }) => {
  const [isOpen, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLButtonElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const clickOff = (clickedEl: HTMLElement) => {
    if (!isDefined(menuRef.current) || !isDefined(drawerRef.current)) {
      setOpen(false);
      return;
    }
    if (
      menuRef.current?.contains(clickedEl) ||
      drawerRef.current?.contains(clickedEl)
    ) {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    const mouseUpCb = (e: MouseEvent) => clickOff(e.target as HTMLElement);
    const resizeCb = () => setOpen(false);
    window.addEventListener("mouseup", mouseUpCb);
    window.addEventListener("resize", resizeCb);

    return () => {
      window.removeEventListener("mouseup", mouseUpCb);
      window.removeEventListener("resize", resizeCb);
    };
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflowY = "initial";
    }
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label="Open the menu"
        tabIndex={-1}
        onKeyDown={() => setOpen((prev) => !prev)}
        ref={menuRef}
        className={`hamburger-menu ${applyIfTrue(isOpen, "hamburger-open")}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="hamburger-line line1" />
        <div className="hamburger-line line2" />
        <div className="hamburger-line line3" />
      </button>

      <div
        ref={drawerRef}
        // aria-hidden={!isOpen}
        className={`hamburger-drawer ${applyIfTrue(
          isOpen,
          "hamburger-drawer-open"
        )}`}
      >
        {children}
      </div>
    </>
  );
};

export default HamburgerMenu;
