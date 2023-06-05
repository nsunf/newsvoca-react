import { Button, ButtonGroup, FormControl, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { FindMyState } from "../components/FindMyContainer";
import React from "react";
import styled from "styled-components";

const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function FindMyForm({ findMyState, onChange, onSubmit, params }: { findMyState: FindMyState, onChange: React.ChangeEventHandler<HTMLInputElement>, onSubmit: React.FormEventHandler<HTMLFormElement>, params?: string }) {
  return (
    <FormBlock onSubmit={onSubmit}>
      <FormControl>
        <TextField label="이름" type="email" variant="outlined" margin="dense" fullWidth/>
      </FormControl>
      {params === "id" ?
        <FormControl margin="dense">
          <Stack direction="row" alignItems="center" gap={2}>
            <TextField label="전화번호" name="phone1" type="text" inputMode="numeric" value={findMyState.phone1} onChange={onChange} variant="outlined" fullWidth/>
            <Typography color="secondary">-</Typography>
            <TextField name="phone2" type="text" placeholder="1234" inputMode="numeric" value={findMyState.phone2} onChange={onChange} variant="outlined" fullWidth/>
            <Typography color="secondary">-</Typography>
            <TextField name="phone3" type="text" placeholder="5678" inputMode="numeric" value={findMyState.phone3} onChange={onChange} variant="outlined" fullWidth/>
          </Stack>
        </FormControl>
        :
        <FormControl>
          <TextField label="이메일" name="email" type="text" variant="outlined" margin="dense" value={findMyState.email} onChange={onChange} fullWidth/>
        </FormControl>
      }
      <ButtonGroup sx={{ my: 3}}>
        <Button variant="contained" type="submit" sx={{ borderRadius: 5, mx: "auto" }}>{params === "id" ? "아이디 찾기" : "비밀번호 찾기"}</Button>
      </ButtonGroup>
    </FormBlock>
  );
}

export default function FindMyPresenter({ findMyState, onChange, onSubmit }: { findMyState: FindMyState, onChange: React.ChangeEventHandler<HTMLInputElement>, onSubmit: React.FormEventHandler<HTMLFormElement> }) {
  const params = useParams();

  return (
    <Grid container mt={25}>
      <Grid item xs={12} md={8} lg={6} xl={4} m="0 auto">
        <Paper variant="outlined" sx={{ p: 5 }}>
          <Stack alignItems="center" gap={5}>
            <Typography variant="h4" fontWeight="bold">{params.type === "id" ? "아이디 찾기" : "비밀번호 찾기"}</Typography>
            <FindMyForm findMyState={findMyState} onChange={onChange} onSubmit={onSubmit} params={params.type} />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
}