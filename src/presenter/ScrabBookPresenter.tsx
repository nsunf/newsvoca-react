import { Box, Button, IconButton, InputBase, Menu, MenuItem, Paper, Stack, TextField } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import useFoldableMenu from "../hooks/useFoldableMenu";

function SearchBar() {
  return (
    <Paper sx={{ width: "300px", borderRadius: 5 }} elevation={1}>
      <Stack direction="row">
        <IconButton disabled>
          <SearchIcon/>
        </IconButton>
        <InputBase sx={{ flexGrow: 1 }} placeholder="Search..."/>
      </Stack>
    </Paper>
  );
}

export default function ScrabBookPresenter() {
  const [anchorEl, handleClick, handleClose] = useFoldableMenu();
  return (
    <>
      <Box>
        <Stack flexDirection="row" justifyContent="end">
          <SearchBar />
          <Button onClick={handleClick}>정렬</Button>
          <Menu anchorEl={anchorEl} open={anchorEl !== null} onClose={handleClose}>
            <MenuItem onClick={handleClose}>이름</MenuItem>
            <MenuItem onClick={handleClose}>날짜</MenuItem>
          </Menu>
          <Button>편집</Button>
        </Stack>
      </Box>
    </>
  );
}