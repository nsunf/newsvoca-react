import { Button, FormControl, FormHelperText, Grid, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { LoginState } from "../container/LoginContainer";
import styled from "styled-components";

const LoginFormBlock = styled('form')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

function LoginForm({ loginState, onSubmit, onChange }: LoginProps) {
  return (
    <LoginFormBlock onSubmit={onSubmit}>
      <FormControl error={loginState.error} fullWidth>
        <TextField
          label="이메일"
          type="text"
          id="email"
          name="email"
          value={loginState.email}
          onChange={onChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="비밀번호"
          type="password"
          id="password"
          name="password"
          value={loginState.password}
          onChange={onChange}
          variant="outlined"
          margin="dense"
          fullWidth
        />
        {loginState.error ? <FormHelperText>아이디 혹은 비밀번호가 일치하지 않습니다.</FormHelperText> : null }
      </FormControl>
      <Stack gap={1} width={{ xs: "100%", sm: "50%" }}>
        <Button type="submit" variant="contained" sx={{ borderRadius: 5 }}>로그인</Button>
        <Link component={RouterLink} to="/auth/signup">
          <Button variant="outlined" sx={{ width: "100%", borderRadius: 5 }}>회원가입</Button>
        </Link>
      </Stack>
    </LoginFormBlock>
  );
}

interface LoginProps {
  loginState: LoginState;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function LoginPresenter({ loginState, onChange, onSubmit }: LoginProps) {
  return (
    <Grid container mt={25}>
      <Grid item xs={12} md={8} lg={6} xl={4} m="0 auto">
        <Paper variant="outlined" sx={{ p: 5 }}>
          <Stack alignItems="center" gap={5}>
            <Typography variant="h4" fontWeight="bold">로그인</Typography>
            <LoginForm loginState={loginState} onChange={onChange} onSubmit={onSubmit}/>
            <Stack direction="row" justifyContent="space-around" gap={3}>
              <Link component={RouterLink} to="/auth/findmy/id">아이디 찾기</Link>
              <Link component={RouterLink} to="/auth/findmy/pw">비밀번호 찾기</Link>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}