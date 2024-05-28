import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

const MovieCard = ({ movie, onDelete }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardMedia component="img" alt={movie.title} height="140" image={movie.poster} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error" onClick={() => onDelete(movie.title)}>
          Supprimer
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;