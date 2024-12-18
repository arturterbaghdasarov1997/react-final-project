import { useState, useEffect } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { useUnsplashSearch } from "../hooks/useUnsplashSearch";
import { Header } from "../components/Header";
import { PhotoCard } from "../components/PhotoCard";
import { ModalView } from "../components/ModalViews";

export const Home = () => {
  const [query, setQuery] = useState("search");
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  const { data, isLoading, isError } = useUnsplashSearch(query, page);

  const resultsPerPage = 20;
  const totalPages = data ? Math.min(Math.ceil(data.total / resultsPerPage), 30) : 1;

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (data?.results.length === 0 && page > 1) {
      setPage((prev) => prev - 1);
    }
  }, [data, page]);

  if (isLoading) return <CircularProgress />;
  if (isError) return <Box>Error loading photos!</Box>;

  return (
    <Box>
      <Header query={query} setQuery={setQuery} />
      
      <Box
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gap={2}
        mt={2}
      >
        {data?.results.map((photo: any) => (
          <Box key={photo.id}>
            <PhotoCard
              photo={photo}
              onClick={() => setSelectedPhoto(photo)}
            />
          </Box>
        ))}
      </Box>

      <Box mt={4} display="flex" justifyContent="center">
        <Button
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          sx={{ ml: 2 }}
          disabled={page === totalPages || (data?.results.length === 0 && page > 1)}
        >
          Next
        </Button>
      </Box>

      {selectedPhoto && (
        <ModalView
          open={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          photo={selectedPhoto}
        />
      )}
    </Box>
  );
};
