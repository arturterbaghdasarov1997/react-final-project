export interface IPhotoModal {
  open: boolean;
  onClose: () => void;
  photo: {
    id: string;
    urls: { regular: string; full?: string; small?: string }; // Add full and small if the API supports them
    alt_description: string;
    user: { name: string; instagram_username: string };
    description: string | null;
    likes: number;
    width: string;
    height: string;
    location: { name: string };
    created_at: string;
  };
}
