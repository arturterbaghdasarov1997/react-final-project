export interface IPhotoModal {
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
  