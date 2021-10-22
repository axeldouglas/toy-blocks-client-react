import React from "react";
import PropTypes from "prop-types";
import { Typography, makeStyles, Box } from "@material-ui/core";
import colors from "../constants/colors";

const Block = ({ block }) => {
  const classes = useStyles();

  return (
    <Box className={classes.blockContainer}>
      <Typography className={classes.blockTitle}>
        {block?.id?.padStart(3, "0") || "000"}
      </Typography>
      <Typography className={classes.blockDescription}>
        {block?.attributes?.data || "---"}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  blockContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.disabled,
    borderRadius: "2px",
    padding: "8px 8px 4px 8px",
    margin: "2px 0",
    fontStyle: "normal",
  },
  blockTitle: {
    fontWeight: "bold",
    fontSize: theme.typography.pxToRem(10),
    lineHeight: "16px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: colors.primary,
  },
  blockDescription: {
    fontWeight: "normal",
    fontSize: theme.typography.pxToRem(14),
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: colors.text,
  },
}));

Block.propTypes = {
  block: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    attributes: PropTypes.shape({
      index: PropTypes.number,
      timestamp: PropTypes.number,
      data: PropTypes.string,
      "previous-hash": PropTypes.string,
      hash: PropTypes.string,
    }),
  }).isRequired,
};

export default Block;
