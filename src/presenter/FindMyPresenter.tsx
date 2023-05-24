import { Button, FormControl, Grid, InputLabel, Link, OutlinedInput, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { IMaskInput } from "react-imask";
import { Link as RouterLink, useParams } from "react-router-dom";

const PhoneMask = React.forwardRef<HTMLElement>(
  ({ ...other }, ref) => <IMaskInput {...other} mask="000-0000-0000" inputRef={ref} />
);

export default function FindMyPresenter() {
  const params = useParams();

  console.log(params);

  return (
    <Grid container mt={25}>
      <Grid item xs={12} md={8} lg={6} xl={4} m="0 auto">
        <Paper variant="outlined" sx={{ p: 5 }}>
          <Stack alignItems="center" gap={5}>
            <Typography variant="h4" fontWeight="bold">{params.type === "id" ? "아이디 찾기" : "비밀번호 찾기"}</Typography>
            <Stack width="100%" gap={1}>
              <FormControl>
                <TextField label="이름" type="email" variant="outlined" margin="dense" fullWidth/>
              </FormControl>
              {
                params.type === "id" ?
                <FormControl>
                  <InputLabel htmlFor="phone">전화번호</InputLabel>
                  <OutlinedInput id="phone" name="phone" label="전화번호" placeholder="010-1234-5678" inputComponent={PhoneMask as any}/>
                </FormControl> :
                <FormControl>
                  <TextField label="이메일" type="email" variant="outlined" margin="dense" fullWidth/>
                </FormControl>
              }
            </Stack>
            <Button variant="contained" sx={{ borderRadius: 5 }}>{params.type === "id" ? "아이디 찾기" : "비밀번호 찾기"}</Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}