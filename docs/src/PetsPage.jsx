import "./App.css";
import * as React from "react";
import { Container, ImageList, ImageListItem } from "@mui/material";

function PetsPage() {
  return (
    <Container sx={{ marginTop: 10, alignItems: "center" }}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: "easter_pug.jpg",
    title: "Pug",
  },
  {
    img: "pug.jpg",
    title: "Pug",
  },
];
export default PetsPage;
