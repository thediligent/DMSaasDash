import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';

// material-ui
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

// project import
import MainCard from 'components/MainCard';

function BookPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBooks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('//openlibrary.org/search.json?q=the+lord+of+the+rings');
      setBooks(response.data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const SkeletonCard = () => (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <MainCard>
        <Skeleton variant="text" height={32} width="80%" />
        <Skeleton variant="text" height={20} width="60%" />
        <Skeleton variant="text" height={20} width="70%" />
        <Skeleton variant="text" height={20} width="50%" />
      </MainCard>
    </Grid>
  );

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Books</Typography>
      </Grid>

      {loading
        ? Array.from(new Array(8)).map((_, index) => <SkeletonCard key={index} />)
        : books.map((book) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={book.key}>
              <MainCard>
                <Typography variant="h5">{book.title}</Typography>
                <Typography variant="body2"> &nbsp;</Typography>
                <Typography variant="body2">
                  Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}
                </Typography>
                <Typography variant="body2">
                  First Publish Year: {book.first_publish_year || 'Unknown'}
                </Typography>
                <Typography variant="body2"> &nbsp;</Typography>
              </MainCard>
            </Grid>
          ))}
    </Grid>
  );
}

export default BookPage;
