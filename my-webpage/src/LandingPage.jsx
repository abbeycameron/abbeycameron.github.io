import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import { styles } from "./Styles";

export default function LandingPage() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const emojis = ["🌺", "🌻", "🪷", "🌼", "🌸", "🌷"];

  const handleEnter = () => {
    navigate("/home");
  };

  const emojiVariants = {
    hidden: { opacity: 0, y: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      y: -80 - i * 10,
      scale: 1.2,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(253, 237, 250)",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" sx={{ fontFamily: "Bonbon", color: "#d945a8" }}>
        {" "}
        Welcome!
      </Typography>
      <Box
        // component={motion.div}
        // whileHover={{
        //   scale: 1.15,
        //   y: -5,
        //   transition: { type: "spring", stiffness: 300 },
        // }}
        sx={{
          cursor: "pointer",
          width: 400,
          height: 150,
          position: "relative",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          tabIndex={0}
          role="button"
          initial={false}
          viewport={{ amount: 0.8 }}
          animate={isOpen ? { y: 40, opacity: 1 } : { y: 150, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          style={{
            position: "absolute",
            top: -100,
            left: 75,
            transform: "translateX(-50%)",
            width: 250,
            height: 120,
            backgroundColor: "#fff",
            borderRadius: 8,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            display: isOpen ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            zIndex: 3,
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleEnter();
          }}
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleEnter();
            }
          }}
        >
          <Typography sx={styles.header}> Enter Site Here</Typography>
        </motion.div>

        {isOpen ? (
          <>
            {/* Flipped pink triangle */}
            <Box
              sx={{
                width: 300,
                height: 0,
                borderLeft: "50px solid transparent",
                borderRight: "50px solid transparent",
                borderTop: "100px solid rgb(247, 162, 214)",
                position: "absolute",
                top: -100,
                zIndex: 2,
                transform: "scaleY(-1)",
              }}
            />

            {/* Grey triangle background */}
            <Box
              sx={{
                width: 299,
                height: 0,
                borderLeft: "52px solid transparent",
                borderRight: "52px solid transparent",
                borderTop: "102px solid rgb(204, 199, 199)",
                position: "absolute",
                top: 1,
                left: -2,
                zIndex: 1,
              }}
            />

            {/* Envelope body */}
            <Card
              sx={{
                width: 401,
                height: "100%",
                backgroundColor: "rgb(243, 201, 227)",
                paddingTop: "75px",
                textAlign: "center",
                color: "#fff",
                zIndex: 1,
              }}
              elevation={6}
            />

            {/* Emojis */}
            <Box
              sx={{
                position: "absolute",
                bottom: "120%",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 2,
                pointerEvents: "none",
              }}
            >
              {emojis.map((emoji, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={emojiVariants}
                  style={{ fontSize: 32 }}
                >
                  {emoji}
                </motion.div>
              ))}
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                position: "absolute",
                top: 80,
                left: "50%",
                transform: "translateX(-50%)",
                width: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: "#eee", // visible background
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
                style={{ display: "flex" }}
              >
                <FilterVintageIcon sx={{ fontSize: 40, color: "#d945a8" }} />
              </motion.div>
            </Box>
            {/* Pink triangle on top */}
            <Box
              sx={{
                width: 300,
                height: 0,
                borderLeft: "50px solid transparent",
                borderRight: "50px solid transparent",
                borderTop: "100px solid rgb(247, 162, 214)",
                position: "absolute",
                zIndex: 7,
              }}
            />

            {/* Dark grey triangle background */}
            <Box
              sx={{
                width: 300,
                height: 0,
                borderLeft: "52px solid transparent",
                borderRight: "52px solid transparent",
                borderTop: "102px solid rgb(114, 113, 113)",
                position: "absolute",
                left: -2,
                zIndex: 1,
              }}
            />

            {/* Envelope body */}
            <Card
              sx={{
                width: 401,
                height: "100%",
                backgroundColor: "rgb(243, 201, 227)",
                paddingTop: "75px",
                textAlign: "center",
                color: "#fff",
                zIndex: 1,
              }}
              elevation={6}
            />
          </>
        )}
      </Box>
    </Box>
  );
}
