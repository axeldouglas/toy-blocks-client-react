import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  makeStyles,
  Box,
} from "@material-ui/core";
import * as actions from "../actions/nodes";
import colors from "../constants/colors";
import Status from "./Status";
import Blocks from "./Blocks";

const Node = ({ node, expanded, toggleNodeExpanded }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (expanded) {
      dispatch(actions.getNodeBlocks(node));
    }
    //eslint-disable-next-line
  }, [expanded]);

  return (
    <Accordion
      elevation={3}
      className={classes.root}
      expanded={expanded}
      onChange={() => toggleNodeExpanded(node)}
    >
      <AccordionSummary
        className={classes.summary}
        classes={{
          expandIcon: classes.icon,
          content: classes.content,
        }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Box className={classes.summaryContent}>
          <Box>
            <Typography variant="h5" className={classes.heading}>
              {node.name || "Unknown"}
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.secondaryHeading}
            >
              {node.url}
            </Typography>
          </Box>
          <Status loading={node.loading} online={node.online} />
        </Box>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <Blocks node={node} />
      </AccordionDetails>
    </Accordion>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "12px 0 !important",
    boxShadow: "0px 3px 6px 1px rgba(0,0,0,0.15)",
    "&:before": {
      backgroundColor: "unset",
    },
    borderRadius: "3px",
  },
  summary: {
    padding: "0 30px 0 20px",
  },
  summaryContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingRight: 6,
  },
  icon: {
    color: colors.iconsColor,
  },
  content: {
    margin: "14px 0 !important", // Avoid change of sizing on expanded
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontStyle: "normal",
    fontWeight: "normal",
    color: colors.text,
    lineHeight: "24px",
    letterSpacing: "0.44px",
    marginBottom: "4px",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    fontStyle: "normal",
    fontWeight: "normal",
    color: colors.text,
    lineHeight: "20px",
    letterSpacing: "0.25px",
    opacity: 0.54,
  },
  details: {
    padding: "0px 14px 14px 14px",
  },
}));

Node.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  expanded: PropTypes.bool,
  toggleNodeExpanded: PropTypes.func.isRequired,
};

export default Node;
