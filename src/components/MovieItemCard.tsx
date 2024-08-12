import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { BASE_URL_IMAGES } from '../api/constants'

export interface IMovieItemCardProps {
  title: string
  imagePath: string
}
export const MovieItemCard = ({ title, imagePath }: IMovieItemCardProps) => {
  const size = 'w200'
  return (
    <Card
      elevation={0}
      sx={{
        width: 200,
        maxWidth: 345,
        bgcolor: 'transparent',
      }}
    >
      <CardMedia
        sx={{ borderRadius: 4 }}
        component="img"
        alt="green iguana"
        height="300"
        image={`${BASE_URL_IMAGES}${size}${imagePath}`}
      />
      <CardContent
        sx={{
          bgcolor: 'transparent',
          width: '100%',
          px: '3.5px !important',
          pt: 1,
        }}
      >
        <Typography variant="h6" textAlign={'start'}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}
