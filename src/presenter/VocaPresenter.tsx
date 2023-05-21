import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import SearchBox from "../components/SearchBox";
import React, { useEffect, useState } from "react";

import ClearIcon from '@mui/icons-material/Clear';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const sample = [
  "Adventure", "Airplane", "Antelope", "Antidisestablishmentarianism", "Apple", "Aquarium", "Architect", "Artichoke", "Astronaut", "Australia", "Automobile",
  "Balloon", "Banana", "Basketball", "Beach", "Benevolence", "Bicycle", "Book", "Bottle", "Brick", "Bridge", "Butterfly",
  "Fabrication", "Fascinating", "Federation", "Flamboyant", "Flourishing", "Formidable", "Fortuitous", "Fragrance", "Frivolous", "Fulfillment",
  "Illustrious", "Impressive", "Incredible", "Intelligent", "Immaculate", "Imaginative", "Important", "Indispensable", "Innovative", "Inspiring",
  "Knowledgeable", "Kindhearted", "Kaleidoscope", "Keenness", "Kinetoscope", "Kudos", "Knightly", "Kaleidoscopic", "Keystone", "Knockout",
  "Quintessential", "Quantitative", "Questionable", "Qualitative", "Quintillion", "Quizzical", "Quandary", "Quintessence", "Quotient", "Qualification"
];

interface WordListProps {
  alphabet: string;
  list: string[];
  openDialog: () => void;
}

function WordList({ alphabet, list, openDialog }: WordListProps) {
  return (
    <Paper sx={{ pt: 2 }} elevation={0}>
      <Typography variant="h6" px={2}>{alphabet.toUpperCase()}</Typography>
      <Divider sx={{ my: 1 }}/>
      <Grid container spacing={2}>
        {list.map((str, i) =>
          <Grid key={str + i} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Chip
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
              onClick={openDialog}
              clickable
            />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default function VocaPresenter() {
  const [wordMap, setWordMap] = useState<Map<string, string[]>>(new Map());
  const [open, setOpen] = useState(false);

  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  useEffect(() => {
    let newMap = new Map();
    let tmp: string[] = [];
    let label: string|null = null;

    sample.sort().forEach(w => {
      const firstLetter = w.slice(0, 1).toLocaleLowerCase();
      if (firstLetter !== label) {
        if (label !== null) newMap.set(label, tmp);
        label = firstLetter;
        tmp = [];
      }
      tmp.push(w);
    });
    newMap.set(label, tmp);

    setWordMap(newMap);
  }, []);

  return (
    <>
      <SearchBox />
      <Box p={4}>
        {
          Array.from(wordMap.entries())
            .map(([alphabet, list], i) => <WordList key={alphabet + i} alphabet={alphabet} list={list} openDialog={openDialog} />)
        }
        <Dialog
          open={open}
          onClose={closeDialog}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle display="flex" justifyContent="space-between">
            selected word
            <IconButton onClick={closeDialog}>
              <ClearIcon />
            </IconButton>
          </DialogTitle>
          <Divider sx={{ px: 2 }} />
          <DialogContent>
            <Box>
              <Typography>Alpha</Typography>
              <Typography>알파</Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Stack direction="row" justifyContent="space-between">
              <IconButton>
                <VolumeUpIcon />
              </IconButton>
              <IconButton>
                <BookmarkIcon />
              </IconButton>
            </Stack>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}