import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { HoverMenuGroupProps } from "../Models";

const HoverMenuGroup: React.FC<HoverMenuGroupProps> = ({
  className,
  children,
}) => {
  const [menuHovered, setMenuHovered] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const menuRef = useDetectClickOutside({
    onTriggered: () => setMenuClicked(false),
  });

  return (
    <div
      ref={menuRef}
      className={`relative ${className}`}
      onMouseEnter={() => setMenuHovered(true)}
      onMouseLeave={() => setMenuHovered(false)}
      onClick={() => setMenuClicked((prev) => !prev)}
    >
      {children[0]}
      {(menuHovered || menuClicked) && children[1]}
    </div>
  );
};

export default HoverMenuGroup;
