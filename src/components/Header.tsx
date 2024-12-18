import { TextField, AppBar, Toolbar, Typography } from '@mui/material';

interface HeaderProps {
  query: string;
  setQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ query, setQuery }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Gallery
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ bgcolor: 'white', borderRadius: 1 }}
      />
    </Toolbar>
  </AppBar>
);
