import { Modal, Box, Typography } from "@mui/material";

interface PhotoModalProps {
  open: boolean;
  onClose: () => void;
  photo: {
    id: string;
    urls: { regular: string };
    alt_description: string;
    user: { name: string };
    description: string | null;
    likes: number;
  };
}

export const ModalView: React.FC<PhotoModalProps> = ({ open, onClose, photo }) => (
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
        maxWidth: 600,
        width: "100%",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxHeight: "60vh",
          overflow: "hidden",
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "60vh",
            objectFit: "contain",
          }}
        />
      </Box>
      <Typography variant="h5" fontWeight="bold">Author: {photo.user.name}</Typography>
      <Typography variant="body1" mt={2}>
        {photo.description || "No description available"}
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={1}>
        {photo.likes} likes
      </Typography>
    </Box>
  </Modal>
);
