import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  makeStyles,
  Box,
  CircularProgress,
} from "@material-ui/core";
import colors from "../constants/colors";
import Block from "./Block";

const Blocks = ({ node }) => {
  const classes = useStyles();

  if (
    !node.blocks.length &&
    (node.loading === true || node.loadingBlocks === true)
  ) {
    return (
      <Box className={classes.spinnerWrapper}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (!node.blocks.length) {
    return (
      <Typography className={classes.notFound}>No results found</Typography>
    );
  }

  return (
    <Box className={classes.blockWrapper}>
      {node.blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  blockWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  spinnerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: "rgba(0, 0, 0, 0.12)",
  },
  notFound: {
    width: "100%",
    textAlign: "center",
    padding: "10px 0 14px",
    fontSize: theme.typography.pxToRem(14),
    color: colors.text,
    opacity: 0.54,
  },
}));

Blocks.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool,
    loadingBlocks: PropTypes.bool,
    blocks: PropTypes.array,
  }).isRequired,
};

export default Blocks;
