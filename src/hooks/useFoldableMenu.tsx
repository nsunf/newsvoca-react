import { useState, MouseEvent } from "react";


export default function useFoldableMenu(): [HTMLElement|null, (e: MouseEvent<HTMLElement>) => void, () => void] {
  const [anchorEl, setAnchorEl] = useState<HTMLElement|null>(null);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  ;}

  const handleClose = () => {
    setAnchorEl(null);
  };

  return [anchorEl, handleClick, handleClose];
}