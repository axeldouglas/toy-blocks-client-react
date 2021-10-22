import fetch from "cross-fetch";
import * as types from "../constants/actionTypes";

const checkNodeStatusStart = (node) => {
  return {
    type: types.CHECK_NODE_STATUS_START,
    node,
  };
};

const checkNodeStatusSuccess = (node, res) => {
  return {
    type: types.CHECK_NODE_STATUS_SUCCESS,
    node,
    res,
  };
};

const checkNodeStatusFailure = (node) => {
  return {
    type: types.CHECK_NODE_STATUS_FAILURE,
    node,
  };
};

const getNodeBlocksStart = (node, res) => {
  return {
    type: types.GET_NODE_BLOCKS_START,
    node,
  };
};

const getNodeBlocksSuccess = (node, res) => {
  return {
    type: types.GET_NODE_BLOCKS_SUCCESS,
    node,
    res,
  };
};

const getNodeBlocksFailure = (node) => {
  return {
    type: types.GET_NODE_BLOCKS_FAILURE,
    node,
  };
};

function getNodeBlocks(node) {
  return async (dispatch) => {
    if (node.online === true) {
      try {
        dispatch(getNodeBlocksStart(node));
        const res = await fetch(`${node.url}/api/v1/blocks`);

        if (res.status >= 400) {
          dispatch(getNodeBlocksFailure(node));
          return;
        }

        const json = await res.json();
        dispatch(getNodeBlocksSuccess(node, json));
      } catch (err) {
        dispatch(getNodeBlocksFailure(node));
      }
    } else {
      dispatch(getNodeBlocksFailure(node));
    }
  };
}

function checkNodeStatus(node) {
  return async (dispatch) => {
    try {
      dispatch(checkNodeStatusStart(node));
      const res = await fetch(`${node.url}/api/v1/status`);

      if (res.status >= 400) {
        dispatch(checkNodeStatusFailure(node));
        return;
      }

      const json = await res.json();

      dispatch(checkNodeStatusSuccess(node, json));
    } catch (err) {
      dispatch(checkNodeStatusFailure(node));
    }
  };
}

function checkNodeStatuses(list) {
  return (dispatch) => {
    list.forEach((node) => {
      dispatch(checkNodeStatus(node));
    });
  };
}

export { checkNodeStatus, checkNodeStatuses, getNodeBlocks };
