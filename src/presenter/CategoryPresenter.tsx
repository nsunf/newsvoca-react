import { Box, Button, Link, List, ListItemButton, Menu, MenuItem, Stack } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import CategoryMajor from "../model/CategoryMajor";
import CategoryMinor from "../model/CategoryMinor";
import { Link as RouterLink } from "react-router-dom";
import useFoldableMenu from "../hooks/useFoldableMenu";


function MajorCategories({ majorCatList, selectedCat }: { majorCatList: CategoryMajor[], selectedCat: CategoryMajor|null }) {
  const [anchorEl, handleClick, handleClose] = useFoldableMenu();

  return (
    <Box
      sx={{
        marginRight: { xs: "8px", md: "16px" },
        display: { xs: "none", md: "block" }
      }}
    >
      <Button
        onClick={handleClick}
        sx={{ fontSize: "20px", fontWeight: "bold" }}
      >
        {selectedCat?.name}
        <ArrowDropDownIcon/>
      </Button>
      <Menu
        open={anchorEl !== null}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {majorCatList.map(cat =>
          <MenuItem
            key={"maj_cat_" + cat.id}
            selected={cat.id === selectedCat?.id}
            onClick={handleClose}
            sx={{p: "0" }}
          >
            <Button
              sx={{ width: "100%", paddingX: "16px"}}
              component={RouterLink}
              to={"/" + cat.name}
            >
              {cat.name}
            </Button>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
}

function MinorCategories({ minorCatList }: { minorCatList: CategoryMinor[] }) {
  return (
    <Stack
      direction="row"
      gap="16px"
      sx={{ display: { xs: "none", md: "flex" } }}
      flexWrap="wrap"
    >
      {minorCatList.map(cat =>
        <Link
          key={"minor_cat_" + cat.id}
          component={RouterLink}
          to={"/" + cat.categoryMajor.name + "/" + cat.name}
          underline="hover"
        >
          {cat.name}
        </Link>
      )}
    </Stack>
  );
}

function MobileCategories({ majorCatList, minorCatList, selectedCat }: { majorCatList: CategoryMajor[], minorCatList: CategoryMinor[], selectedCat: CategoryMajor|CategoryMinor|null }) {
  const [anchorEl, handleClick, handleClose] = useFoldableMenu();

  return (
    <>
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Button
        sx={{ fontWeight: "bold" }}
        onClick={handleClick}
      >
        {selectedCat?.name}
        <ArrowDropDownIcon/>
      </Button>
      <Menu
        open={anchorEl !== null}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {majorCatList.map(majCat => 
          <MenuItem sx={{ p: "0" }} key={"major_cat_m_" + majCat.id}>
            <Box sx={{ width: "100%" }}>
              <Button
                component={RouterLink}
                to={"/" + majCat.name}
                sx={{ width: "100%", fontWeight: "bold" }}
                onClick={handleClose}
              >
                {majCat.name}
              </Button>
              <List sx={{ padding: "0" }}>
                {minorCatList.filter(minCat => minCat.categoryMajor.id === majCat.id).map(minCat => 
                  <ListItemButton
                    key={"minor_cat_m_" + minCat.id}
                    component={RouterLink}
                    to={"/" + minCat.categoryMajor.name + "/" + minCat.name}
                    onClick={handleClose}
                    sx={{ paddingLeft: "40px", boxSizing: "content-box", fontSize: "13px"}}
                  >
                    {minCat.name}
                  </ListItemButton>
                )}
              </List>
            </Box>
          </MenuItem>
        )}
      </Menu>
    </Box>
    </>
  );
}

interface CategoryPresenterProps {
  majorCategoryList: CategoryMajor[];
  minorCategoryList: CategoryMinor[];
  selectedMajorCat: CategoryMajor|null;
  selectedMinorCat: CategoryMinor|null;
}

export default function CategoryPresenter(props: CategoryPresenterProps) {
  const {
      majorCategoryList,
      minorCategoryList,
      selectedMajorCat,
      selectedMinorCat
    } = props;

  return (
    <Stack direction="row" alignItems="center">
      <MajorCategories majorCatList={majorCategoryList} selectedCat={selectedMajorCat} />
      <MinorCategories minorCatList={minorCategoryList.filter(cat => cat.categoryMajor.id === selectedMajorCat?.id)} />
      <MobileCategories majorCatList={majorCategoryList} minorCatList={minorCategoryList} selectedCat={selectedMinorCat ?? selectedMajorCat}/>
    </Stack>
  );
}