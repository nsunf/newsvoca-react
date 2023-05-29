import { Button, FormControl, FormHelperText, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { SignupState } from "../components/SignupContainer";
import styled from "styled-components";

const SignupFormBlock = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function SignupForm({ signupState, onChange, onSubmit }: SignupProps) {
  return (
    <SignupFormBlock onSubmit={onSubmit}>
      <FormControl margin="dense" error={signupState.name.error}>
        <TextField label="이름" name="name" type="text" value={signupState.name.value} onChange={onChange} error={signupState.name.error} variant="outlined" fullWidth/>
        {signupState.name.error ? <FormHelperText>이름을 입력해주세요.</FormHelperText> : null}
      </FormControl>
      <FormControl margin="dense" error={signupState.ssn1.error || signupState.ssn2.error}>
        <Stack direction="row" alignItems="center" gap={2}>
          <TextField label="주민번호" name="ssn1" type="text" inputMode="numeric" value={signupState.ssn1.value} onChange={onChange} error={signupState.ssn1.error} variant="outlined" fullWidth/>
          <Typography color="secondary">-</Typography>
          <TextField name="ssn2" type="text" inputMode="numeric" placeholder="1234567" value={signupState.ssn2.value} onChange={onChange} error={signupState.ssn2.error} variant="outlined" fullWidth/>
        </Stack>
        {(signupState.ssn1.error || signupState.ssn2.error) ? <FormHelperText>주민번호를 입력해주세요.</FormHelperText> : null}
      </FormControl>
      <FormControl margin="dense" error={signupState.email.error}>
        <TextField label="이메일" name="email" type="text" value={signupState.email.value} onChange={onChange} error={signupState.email.error} variant="outlined" fullWidth/>
        {signupState.email.error ? <FormHelperText>이메일 형식에 맞게 입력해주세요.</FormHelperText> : null}
      </FormControl>
      <FormControl margin="dense" error={signupState.password1.error}>
        <TextField label="비밀번호" name="password1" type="password" value={signupState.password1.value} onChange={onChange} error={signupState.password1.error} variant="outlined" fullWidth/>
        {signupState.password1.error ? <FormHelperText>비밀번호는 영어, 숫자, 특수문자(!, ?, @, #, $, %, ^, &, *, ?)를 모두 포함한 8~20자를 입력해야 합니다.</FormHelperText> : null}
      </FormControl>
      <FormControl margin="dense" error={signupState.password2.error}>
        <TextField label="비밀번호 확인" name="password2" type="password" value={signupState.password2.value} onChange={onChange} error={signupState.password2.error} variant="outlined" fullWidth/>
        {signupState.password2.error ? <FormHelperText>비밀번호가 일치하지 않습니다.</FormHelperText> : null}
      </FormControl>
      <FormControl margin="dense" error={signupState.phone1.error || signupState.phone2.error || signupState.phone3.error}>
        <Stack direction="row" alignItems="center" gap={2}>
          <TextField label="전화번호" name="phone1" type="text" inputMode="numeric" value={signupState.phone1.value} onChange={onChange} error={signupState.phone1.error} variant="outlined" fullWidth/>
          <Typography color="secondary">-</Typography>
          <TextField name="phone2" type="text" placeholder="1234" inputMode="numeric" value={signupState.phone2.value} onChange={onChange} error={signupState.phone2.error} variant="outlined" fullWidth/>
          <Typography color="secondary">-</Typography>
          <TextField name="phone3" type="text" placeholder="5678" inputMode="numeric" value={signupState.phone3.value} onChange={onChange} error={signupState.phone3.error} variant="outlined" fullWidth/>
        </Stack>
        {(signupState.phone1.error || signupState.phone2.error || signupState.phone3.error) ? <FormHelperText>전화번호를 입력해주세요.</FormHelperText> : null}
      </FormControl>
      <FormControl margin="dense" error={signupState.address1.error}>
        <TextField label="주소" name="address1" type="text" value={signupState.address1.value} onChange={onChange} error={signupState.address1.error} variant="outlined" fullWidth/>
        {signupState.address1.error ? <FormHelperText>주소를 입력해주세요.</FormHelperText> : null}
      </FormControl>
      <FormControl margin="dense" error={signupState.address2.error}>
        <TextField label="상세주소" name="address2" type="text" value={signupState.address2.value} onChange={onChange} error={signupState.address2.error} variant="outlined" fullWidth/>
        {signupState.address2.error ? <FormHelperText>상세주소를 입력해주세요.</FormHelperText> : null}
      </FormControl>
      <Button variant="outlined" type="submit" sx={{ borderRadius: 5, my: 2 }}>회원가입</Button>
    </SignupFormBlock>
  );
}

interface SignupProps {
  signupState: SignupState;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function SignupPresenter({ ...props }: SignupProps) {
  return (
    <>
      <Grid container my={3}>
        <Grid item xs={12} md={8} lg={6} xl={4} m="0 auto">
          <Paper variant="outlined" sx={{ p: 5 }}>
            <Stack alignItems="center" gap={5}>
              <Typography variant="h4" fontWeight="bold">회원가입</Typography>
              <SignupForm {...props} />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}