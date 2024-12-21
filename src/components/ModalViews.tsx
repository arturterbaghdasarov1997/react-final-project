import { Modal, Box, Typography } from "@mui/material";
import { IPhotoModal } from "../interfaces/photomodal.interface";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const ModalView: React.FC<IPhotoModal> = ({ open, onClose, photo }) => {
  const imageUrl = photo.urls.full || photo.urls.regular || photo.urls.small;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          maxWidth: "90%",
          width: "auto",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 2,
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={imageUrl}
            alt={photo.alt_description}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography variant="h5" fontWeight="bold">
          Author: {photo.user.name}
        </Typography>

        <Typography variant="body1" mt={2}>
          {photo.description || "No description available"}
        </Typography>

        {photo.location && photo.location.name && (
          <Typography variant="body2" color="text.secondary" mt={1}>
            Location: {photo.location.name}
          </Typography>
        )}

        <Typography variant="body1" color="text.secondary" mt={1}>
          <strong><FavoriteBorderIcon/> {photo.likes} Likes</strong>
        </Typography>

        {photo.user.instagram_username && (
          <Typography variant="body2" color="text.secondary" fontStyle="italic" mt={1}>
            <strong>Instagram: @{photo.user.instagram_username}</strong>
          </Typography>
        )}

        {photo.user.twitter_username && (
          <Typography variant="body2" color="text.secondary" fontStyle="italic" mt={1}>
            <strong>X: @{photo.user.twitter_username}</strong>
          </Typography>
        )}

        {photo.width && photo.height && (
          <Typography variant="body2" color="text.secondary" mt={1}>
            Dimensions: {photo.width}x{photo.height} px
          </Typography>
        )}

        {photo.created_at && (
          <Typography variant="body2" color="text.secondary" mt={1}>
            Taken on: {new Date(photo.created_at).toLocaleDateString()}
          </Typography>
        )}
      </Box>
    </Modal>
  );
};
