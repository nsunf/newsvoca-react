import { Card, CardActions, CardContent, CardHeader, Grid, Stack, Switch, Typography } from "@mui/material";

export default function SettingPresenter() {
  return (
    <>
    <Grid container p={2} spacing={2}>
      <Grid item xs={12} md={6}>
        <Card sx={{ bgcolor: "grey.100" }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6" fontWeight="bold">모드</Typography>
              <CardActions sx={{ p: 0 }}>
                <Switch />
              </CardActions>
            </Stack>
            <Typography>웹 사이트의 라이트/다크모드를 설정합니다.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  );
}