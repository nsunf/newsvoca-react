import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DatePicker, LoadingButton } from "@mui/lab";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, FormLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";

interface ProfileImageProps {
  imgRef: React.MutableRefObject<HTMLImageElement|null>;

}

function ProfileImage({ imgRef }: ProfileImageProps ) {
  return (
    <Box borderRadius={50} overflow="hidden" sx={{ height: "100%", aspectRatio: "1/1" }}>
      <img
        ref={imgRef}
        alt="profile_img"
        src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    </Box>
  );
}

export default function EditProfilePresenter() {
  const imgInputRef: React.MutableRefObject<HTMLInputElement|null> = useRef(null);
  const previewRef: React.MutableRefObject<HTMLImageElement|null> = useRef(null);

  const [pwDialog, setPwDialog] = useState({ open: false, showPassword: false });
  const [fileInput, setFileInput] = useState<{ value: string, loading: boolean }>({
    value: "",
    loading: false
  });

  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    birth: "",
    phone: "",
    address1: "",
    address2: ""
  });

  const openDialog = () => setPwDialog(state => ({ ...state, open: true }));
  const closeDialog = () => setPwDialog(state => ({ ...state, open: false }));

  const toggleShowPassword = () => setPwDialog(state => ({ ...state, showPassword: !state.showPassword }));

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value
    });
  }

  const onChangeFileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setFileInput({ value: input.value, loading: false });

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      console.log("onChange");
      reader.onload = e => {
        let a = e.target?.result as string;
        previewRef.current?.setAttribute("src", a);
      }
      reader.readAsDataURL(input.files![0]);
    }
  };

  const onClickImgInputHandler = () => {
    setFileInput(state => ({ ...state, loading: true }));
    imgInputRef.current?.click();
  };

  const onCloseImgInputHandler = () => {
    setFileInput(state => ({ ...state, loading: false }));
  };

  const checkIt = useCallback(() => {
    console.log(fileInput.value ? "files loaded" : "cancel clicked");
    setFileInput(state => ({ ...state, loading: false }));
    document.body.onfocus = null;
  }, [fileInput]);

  const initImgInputBtn = useCallback(() => {
    document.body.onfocus = checkIt;
  }, [checkIt]);

  return (
      <Grid container>
        <Grid item xs={12} md={8} lg={6} xl={4}>
          <Box>
            <FormControl sx={{ p: { xs: 0, sm: 3, lg: 5 } }} fullWidth>
              <Stack direction="row" justifyContent="space-evenly" alignItems="center" height="160px" p={3}>
                <ProfileImage imgRef={previewRef} />
                <Stack alignItems="start" gap={2}>
                  <input ref={imgInputRef} type="file" value={fileInput.value} onClick={initImgInputBtn} onChange={onChangeFileInputHandler} hidden/>
                  <LoadingButton variant="contained" sx={{ borderRadius: 5 }} loading={fileInput.loading} onClick={onClickImgInputHandler}>이미지 변경</LoadingButton>
                  <LoadingButton variant="outlined" sx={{ borderRadius: 5 }} loading={fileInput.loading} onClick={onCloseImgInputHandler}>이미지 삭제</LoadingButton>
                </Stack>
              </Stack>
              <TextField variant="outlined" label="이름" margin="dense"/>
              <TextField variant="outlined" type="email" label="이메일" margin="dense"/>
              <Box my={2}>
                <Button variant="contained" sx={{ borderRadius: 5, px: 3, float: "right" }} onClick={openDialog}>비밀번호 변경</Button>
              </Box>
              <DatePicker label="생년월일" value={inputState.birth} onChange={onChangeInputHandler} />
              <FormControl variant="outlined" margin="dense">
                <FormLabel>전화번호</FormLabel>
                <Stack direction="row" alignItems="center">
                  <TextField variant="outlined" placeholder="010" sx={{ flexGrow: 1 }}/>
                  <Typography px={2} color="text.secondary">-</Typography>
                  <TextField variant="outlined" placeholder="1234" sx={{ flexGrow: 1 }}/>
                  <Typography px={2} color="text.secondary">-</Typography>
                  <TextField variant="outlined" placeholder="5678" sx={{ flexGrow: 1 }}/>
                </Stack>
              </FormControl>
              <TextField variant="outlined" label="주소" margin="dense"/>
              <TextField variant="outlined" label="상세주소" margin="dense"/>
              <Stack direction="row" justifyContent="end" gap={3} my={2}>
                <Button type="reset" variant="outlined" sx={{ borderRadius: 5, px: 5 }}>취소</Button>
                <Button type="submit" variant="contained" sx={{ borderRadius: 5, px: 5 }}>수정</Button>
              </Stack>
            </FormControl>
          </Box>

          <Dialog open={pwDialog.open} onClose={closeDialog} maxWidth="sm" fullWidth>
            <DialogTitle>
              비밀번호 변경
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography paragraph>변경할 비밀번호를 입력해주세요.</Typography>
              </DialogContentText>
              <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">현재 비밀번호</InputLabel>
                <OutlinedInput
                  id="cur-password"
                  type={pwDialog.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        edge="end"
                      >
                        {pwDialog.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="cur-password"
                />
              </FormControl>
              <Divider sx={{ my: 1 }} />
              <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">새 비밀번호</InputLabel>
                <OutlinedInput
                  id="new-password"
                  type={pwDialog.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        edge="end"
                      >
                        {pwDialog.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="new-password"
                />
              </FormControl>
              <FormControl sx={{ my: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">비밀번호 확인</InputLabel>
                <OutlinedInput
                  id="password-conf"
                  type={pwDialog.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        edge="end"
                      >
                        {pwDialog.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="password-conf"
                />
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button type="reset" variant="outlined" sx={{ borderRadius: 5, px: 5 }} onClick={closeDialog}>취소</Button>
              <Button type="submit" variant="contained" sx={{ borderRadius: 5, px: 5 }}>변경</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
  );
}