import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import { useState } from "react";

const MotionBox = motion.create(Box);

export default function InfoCard(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <CardActionArea
      sx={{ borderRadius: 15, overflow: "hidden" }}
      href={props.href}
      target="_blank"
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
          height: "24rem",
          width: "35rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          borderRadius: 15,
          position: "relative",
          overflow: "hidden",
        }}
        {...props.Card}
      >
        <MotionBox
          animate={{
            y: hovered ? 0 : 190,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(248, 248, 248, 0.53)",
            backdropFilter: "blur(6px)",
          }}
        >
          <CardContent sx={{ padding: 4, borderRadius: 20 }}>
            <Typography
              variant="h6"
              component="div"
              sx={props.styles?.body}
              paddingBottom={2}
            >
              {props.title}
            </Typography>
            <Box>{props.content}</Box>
          </CardContent>
        </MotionBox>
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
