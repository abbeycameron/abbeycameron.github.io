import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useState } from "react";
import { styles } from "./Styles";

export default function InfoCard(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <CardActionArea
      href={props.href}
      target={"_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card
        sx={{
          ...props.CardBackground,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "17rem",
          width: "24rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          borderRadius: 15,
        }}
        {...props.Card}
      >
        <Box
          sx={{
            backgroundColor: "rgba(248, 248, 248, 0.53)",
            backdropFilter: "blur(6px)",
          }}
        >
          <CardContent sx={{ overflow: "auto", padding: 3 }}>
            <Typography variant="h6" component="div" sx={styles.body}>
              {props.title}
            </Typography>
            {hovered && (
              <Typography variant="body2" sx={styles.body}>
                {props.description}
              </Typography>
            )}
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  );
}

InfoCard.defaultProps = {
  title: "Title",
  description: "Description",
  CardBackground: {},
  Card: {},
};
