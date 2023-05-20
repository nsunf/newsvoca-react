import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import SearchBox from "../components/SearchBox";

const sampleWord = [
  "Adventure",
  "Airplane",
  "Antelope",
  "Antidisestablishmentarianism",
  "Apple",
  "Aquarium",
  "Architect",
  "Artichoke",
  "Astronaut",
  "Australia",
  "Automobile"
];


export default function VocaPresenter() {
  return (
    <>
      <SearchBox />
      <Box p={2}>
        <Paper sx={{  }} elevation={0}>
          <Typography variant="h6" px={2}>A</Typography>
          <Divider sx={{ my: 1 }}/>
          <Stack maxHeight={32 * 6 + "px"} display="inline-flex" direction="column" flexWrap="wrap" alignItems="center" columnGap={2} rowGap={1}>
            {sampleWord.map((str, i) =>
              <Chip
                key={str + "_" + i}
                label={str}
                sx={{
                  bgcolor: "black",
                  color: "white",
                  fontWeight: "bold",
                  width: "100%",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.75)"
                  }
                }}
                clickable
              />
            )}
          </Stack>
        </Paper>
      </Box>
    </>
  );
}