import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function ImgMediaCard({ image, alt }) {
  return (
    <Card sx={{ maxWidth: 150, height: 150, borderRadius: 5 }}>
      <CardMedia
        component="img"
        image={image}
        alt={alt}
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </Card>
  );
}
