import { TextField, AppBar, Toolbar, Typography } from "@mui/material";
import { IHeader } from "../interfaces/header.interface";

export const Header: React.FC<IHeader> = ({ query, setQuery }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Gallery
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        value={query}
        placeholder="Search photos..."
        onChange={(e) => setQuery(e.target.value)}
        sx={{ bgcolor: "white", borderRadius: 1 }}
      />
    </Toolbar>
  </AppBar>
);