import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import SearchBox from "../components/SearchBox";

const sample = [
  "The majestic oak tree stood tall and proud, its branches reaching towards the sky, providing shade for the weary travelers.",
"The bustling city streets were filled with the sounds of honking horns, chattering pedestrians, and the aroma of street food wafting through the air.",
"As the sun set over the horizon, casting a warm golden glow across the landscape, the gentle breeze whispered secrets to the swaying wildflowers.",
"The old abandoned mansion, with its creaking floors and broken windows, held an air of mystery and intrigue that drew the curious explorers in.",
"With each stroke of the paintbrush, the artist brought the canvas to life, creating a masterpiece that captured the essence of emotion and beauty.",
"The thunderous applause filled the concert hall as the orchestra played their final notes, leaving the audience in awe of the musicians' talent and dedication.",
"The aroma of freshly brewed coffee mingled with the scent of freshly baked pastries, creating an irresistible temptation for the caffeine and sugar lovers.",
"The winding path through the dense forest led to a hidden waterfall, its cascading waters creating a soothing symphony that drowned out the noise of the outside world.",
"The laughter of children echoed through the playground, their joyful shouts and giggles carrying on the breeze, a testament to the innocence and happiness of youth.",
"The historic cathedral, with its towering spires and intricate stained glass windows, stood as a symbol of faith and architectural brilliance, captivating all who entered its doors.",
"The sunflower fields stretched as far as the eye could see, their bright yellow petals dancing in the gentle breeze.",
"The gentle waves lapped against the sandy shore, creating a rhythmic melody that soothed the souls of beachgoers.",
"The old lighthouse stood tall, its beacon guiding ships safely through the treacherous waters of the night.",
"The scent of blooming lavender filled the air, creating a serene and calming atmosphere in the garden.",
"The children's laughter echoed through the park, bringing joy to all who heard it.",
"The snow-capped mountains glistened in the sunlight, creating a picturesque scene of natural beauty.",
"The wise old owl perched on a branch, its eyes gleaming with knowledge and wisdom.",
"The aroma of freshly baked cookies wafted from the kitchen, tempting everyone with its sweet allure.",
"The colorful hot air balloons filled the sky, creating a vibrant and whimsical display.",
"The sound of raindrops on the rooftop created a soothing symphony that lulled me to sleep.",
"The fields of wildflowers swayed in the wind, painting the landscape with a burst of colors.",
"The vibrant city streets buzzed with energy, offering endless possibilities and adventures.",
"The sound of chirping birds welcomed the dawn, signaling the start of a new day.",
"The starry night sky twinkled with distant galaxies, evoking a sense of wonder and awe.",
"The fragrance of freshly cut grass filled the air, signaling the arrival of spring.",
"The cozy fireplace crackled and warmed the room, casting a comforting glow on the surroundings.",
"The autumn leaves danced in the wind, creating a beautiful tapestry of red, orange, and gold.",
"The melodious notes of a piano filled the concert hall, captivating the audience with their beauty.",
"The old cobblestone streets whispered tales of history and nostalgia, enchanting those who walked upon them.",
"The sound of waves crashing against the cliffs created a symphony of nature's power and beauty."
]

export default function SentencePresenter() {
  return (
    <>
      <SearchBox />
      <Grid container p={{ xs: 0, lg: 2 }} my={2} spacing={2}>
        {
          sample.map((p, i) => 
            <Grid item xs={12} md={6} key={p.slice(0, 7) + "_" + i}>
              <Card variant="outlined">
                <CardActionArea>
                  <Typography p={2} variant="body1">
                    {p}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          )
        }
      </Grid>
    </>
  );
}