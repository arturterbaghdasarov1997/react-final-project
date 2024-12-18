import { Card, CardMedia, CardActionArea } from '@mui/material';

interface PhotoCardProps {
  photo: {
    id: string;
    urls: { small: string };
    alt_description: string;
  };
  onClick: () => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => (
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
