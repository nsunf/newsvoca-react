import { Box, Button, ButtonGroup, IconButton, InputBase, Menu, MenuItem, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import useFoldableMenu from "../hooks/useFoldableMenu";

function SearchBar() {
  return (
    <Box 
      width={{ xs: "100%", sm: "300px" }}
      borderRadius={5}
      border="solid"
      borderColor="text.secondary"
      mr={{ xs: 0, sm: 2 }}
      mb={{ xs: 2, sm: 0 }}
    >
      <Stack direction="row">
        <IconButton disabled>
          <SearchIcon/>
        </IconButton>
        <InputBase sx={{ flexGrow: 1 }} placeholder="Search..."/>
      </Stack>
    </Box>
  );
}

export default function SearchBox() {
  const [anchorEl, handleClick, handleClose] = useFoldableMenu();
  
  return (
    <Box px={{ xs: 0, lg: 4 }} mt={3}>
      <Stack flexDirection={{ sx: "column", sm: "row" }} justifyContent={{ xs: "space-between", lg: "end" }} alignItems={{ xs: "end", md: "initial" }}>
        <SearchBar />
        <ButtonGroup>
          <Button onClick={handleClick} sx={{ color: "text.secondary" }}>정렬</Button>
          <Menu anchorEl={anchorEl} open={anchorEl !== null} onClose={handleClose}>
            <MenuItem onClick={handleClose}>이름</MenuItem>
            <MenuItem onClick={handleClose}>날짜</MenuItem>
          </Menu>
          <Button sx={{ color: "text.secondary" }}>편집</Button>
        </ButtonGroup>
      </Stack>
    </Box>
  );
}