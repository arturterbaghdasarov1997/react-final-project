import { useState, useEffect } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useSearch } from "../hooks/useSearch";
import { Header } from "../components/Header";
import { PhotoCard } from "../components/PhotoCard";
import { ModalView } from "../components/ModalViews";

export const Home = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  const adjustedQuery = query || "popular";
  const { data, isLoading, isError } = useSearch(adjustedQuery, page);

  const resultsPerPage = 20;
  const totalPages = data
    ? Math.min(Math.ceil(data.total / resultsPerPage), 30)
    : 1;

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    console.log("Query changed, resetting page to 1");
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (data?.results.length === 0 && page > 1) {
      console.log("No results on current page, going back");
      setPage((prev) => prev - 1);
    }
  }, [data, page]);

  if (isLoading) return <CircularProgress />;

  if (isError) return <Box>Error loading photos!</Box>;

  return (
    <Box>
      <Header query={query} setQuery={setQuery} />

      {!data?.results.length && (
        <Box mt={4} textAlign="center">
          No results found for "{query}". Try searching for something else.
        </Box>
      )}

      <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" gap={2} mt={2}>
        {data?.results.map((photo: any) => (
          <Box key={photo.id}>
            <PhotoCard photo={photo} onClick={() => setSelectedPhoto(photo)} />
          </Box>
        ))}
      </Box>

      <Box mt={4} display="flex" justifyContent="center" alignItems="center">
        <Button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </Button>

        <Box mx={2}>
          <Typography variant="body1">
            <strong>Page {page} of {totalPages}</strong>
          </Typography>
        </Box>

        <Button
          onClick={handleNextPage}
          sx={{ ml: 2 }}
          disabled={page === totalPages || data?.results.length === 0}
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
