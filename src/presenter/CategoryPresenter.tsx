import { PointerEvent, useState } from "react";

import { Box, Button, Menu, MenuItem, MenuList, Typography } from "@mui/material";
import styled from "styled-components";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import CategoryMajor from "../model/CategoryMajor";
import CategoryMinor from "../model/CategoryMinor";



const CategoryBox = styled(Box)`
`;

const MajorCategoryBox = styled(Box)``
const MinorCategoryBox = styled(Box)``
const MobileCategoryBox = styled(Box)``

interface CategoryPresenterProps {
  majorCategoryList: CategoryMajor[];
  minorCategoryList: CategoryMinor[];
}

export default function CategoryPresenter(props: CategoryPresenterProps) {
  const { majorCategoryList, minorCategoryList } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLElement|null>(null);

  const handleClick = (e: PointerEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  ;}

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <CategoryBox>
      <MajorCategoryBox>
        <Typography
          sx={{ color: "black", fontSize: "20px", fontWeight: "bold", userSelect: "none", cursor: "pointer" }}
          onClick={handleClick}
        >
          World
          <ArrowDropDownIcon/>
        </Typography>
        <Menu
          open={anchorEl !== null}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
            {majorCategoryList.map(cat => <MenuItem onClick={handleClose}>{cat.name}</MenuItem>)}
        </Menu>
      </MajorCategoryBox>
      <MinorCategoryBox></MinorCategoryBox>
      <MobileCategoryBox></MobileCategoryBox>
    </CategoryBox>
  );
}