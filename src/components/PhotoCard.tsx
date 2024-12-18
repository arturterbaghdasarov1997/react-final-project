import { Card, CardMedia, CardActionArea } from "@mui/material";
import { IPhotoCard } from "../interfaces/photocard.interface";

export const PhotoCard: React.FC<IPhotoCard> = ({ photo, onClick }) => (
  <Card sx={{ width: 200, margin: 1 }}>
    <CardActionArea onClick={onClick}>
      <CardMedia
        component="img"
        height="200"
        image={photo.urls.small}
        alt={photo.alt_description}
      />
    </CardActionArea>
  </Card>
);
