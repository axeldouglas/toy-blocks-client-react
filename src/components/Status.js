import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Box, Typography } from "@material-ui/core";
import colors from "../constants/colors";

function Status({ online, loading }) {
  const classes = useStyles({ online, loading });
  return (
    <Box display="flex" alignItems="center">
      <span className={classes.dot}></span>
      <Typography component="span" className={classes.text}>
        {loading ? "LOADING" : online ? "ONLINE" : "OFFLINE"}
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  dot: ({ online, loading }) => {
    const color = loading
      ? colors.warning
      : online
      ? colors.success
      : colors.danger;
    return {
      borderRadius: "50%",
      display: "inline-block",
      width: 6,
      height: 6,
      backgroundColor: color,
    };
  },
  text: ({ online }) => ({
    fontSize: theme.typography.pxToRem(10),
    lineHeight: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: "1.5px",
    paddingLeft: 4,
    color: online ? colors.text : colors.faded,
  }),
}));

Status.propTypes = {
  online: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Status;
