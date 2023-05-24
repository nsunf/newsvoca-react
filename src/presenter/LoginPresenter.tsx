import { Button, FormControl, Grid, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function LoginPresenter() {
  return (
    <Grid container mt={25}>
      <Grid item xs={12} md={8} lg={6} xl={4} m="0 auto">
        <Paper variant="outlined" sx={{ p: 5 }}>
          <Stack alignItems="center" gap={5}>
            <Typography variant="h4" fontWeight="bold">로그인</Typography>
            <FormControl sx={{ width: { xs: "100%", sm: "70%" } }}>
              <TextField label="이메일" type="email" variant="outlined" margin="dense" fullWidth/>
              <TextField label="비밀번호" type="password" variant="outlined" margin="dense" fullWidth/>
            </FormControl>
            <Stack gap={1} width={{ xs: "100%", sm: "50%" }}>
              <Button variant="contained" sx={{ borderRadius: 5 }}>로그인</Button>
              <Link component={RouterLink} to="/signup">
                <Button variant="outlined" sx={{ width: "100%", borderRadius: 5 }}>회원가입</Button>
              </Link>
            </Stack>
            <Stack direction="row" justifyContent="space-around" gap={3}>
              <Link component={RouterLink} to="/findmy/id">아이디 찾기</Link>
              <Link component={RouterLink} to="/findmy/pw">비밀번호 찾기</Link>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}