export interface IPhotoModal {
  open: boolean;
  onClose: () => void;
  photo: {
    id: string;
    urls: { regular: string; full?: string; small?: string }
    alt_description: string;
    user: { name: string; instagram_username: string, twitter_username: string };
    description: string | null;
    likes: number;
    width: string;
    height: string;
    location: { name: string };
    created_at: string;
  };
}
