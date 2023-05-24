import { Button, FormControl, Grid, InputLabel, OutlinedInput, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { IMaskInput } from "react-imask";

const SSNMask = React.forwardRef<HTMLElement>(
  ({ ...other }, ref) => <IMaskInput {...other} mask="000000-0######" definitions={{ "#": { mask: /[0-9]/, displayChar: "●", placeholderChar: "●" } }} inputRef={ref} />
);

const PhoneMask = React.forwardRef<HTMLElement>(
  ({ ...other }, ref) => <IMaskInput {...other} mask="000-0000-0000" inputRef={ref} />
);

export default function SignupPresenter() {
  return (
    <>
      <Grid container my={3}>
        <Grid item xs={12} md={8} lg={6} xl={4} m="0 auto">
          <Paper variant="outlined" sx={{ p: 5 }}>
            <Stack alignItems="center" gap={5}>
              <Typography variant="h4" fontWeight="bold">회원가입</Typography>
              <Stack width="100%" gap={2}>
                <FormControl>
                  <TextField label="이름" type="text" variant="outlined" margin="dense" fullWidth/>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="ssn" variant="outlined">주민번호</InputLabel>
                  <OutlinedInput id="ssn" name="ssn" label="주민번호" placeholder="000101-1●●●●●●" inputComponent={ SSNMask as any} />
                </FormControl>
                <FormControl>
                  <TextField label="이메일" type="email" variant="outlined" margin="dense" fullWidth/>
                </FormControl>
                <FormControl>
                  <TextField label="비밀번호" type="password" variant="outlined" margin="dense" fullWidth/>
                </FormControl>
                <FormControl>
                  <TextField label="비밀번호 확인" type="password" variant="outlined" margin="dense" fullWidth/>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="phone">전화번호</InputLabel>
                  <OutlinedInput id="phone" name="phone" label="전화번호" placeholder="010-1234-5678" inputComponent={PhoneMask as any}/>
                </FormControl>
                <FormControl>
                  <TextField label="주소" type="text" variant="outlined" margin="dense" fullWidth/>
                </FormControl>
                <FormControl>
                  <TextField label="상세주소" type="text" variant="outlined" margin="dense" fullWidth/>
                </FormControl>
              </Stack>
                <Button variant="outlined" sx={{ borderRadius: 5 }}>회원가입</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}