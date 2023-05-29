import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeaderProfilePresenter() {
  return (
    <>
    <Stack direction="row" gap="8px" flexGrow={1} justifyContent="end">
      <Button component={Link} to="/auth/login">Login</Button>
      <Button component={Link} to="/auth/signup">Signup</Button>
    </Stack>
    {/* <Box>
      <IconButton component={Link} to="/profile">
        <Avatar alt="" src="" />
      </IconButton>
      <Button color="warning">logout</Button>
    </Box> */}
    </>
  );
}