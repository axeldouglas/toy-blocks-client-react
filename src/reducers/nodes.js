import {
  CHECK_NODE_STATUS_START,
  CHECK_NODE_STATUS_SUCCESS,
  CHECK_NODE_STATUS_FAILURE,
} from "../constants/actionTypes";
import initialState from "./initialState";

export default function nodesReducer(state = initialState().nodes, action) {
  let list;

  const prepareData = (data) => {
    const listCopy = state.list.slice();

    const nodeIndex = listCopy.findIndex((p) => p.url === action.node.url);

    if (nodeIndex >= 0) {
      const node = listCopy[nodeIndex];
      const newData = {
        ...node,
        online: data.online !== undefined ? data.online : node.online,
        name: data.name !== undefined ? data.name : node.name,
        loading: data.loading,
      };
      listCopy[nodeIndex] = newData;
    }

    return listCopy;
  };

  switch (action.type) {
    case CHECK_NODE_STATUS_START:
      list = prepareData({ loading: true });
      return {
        ...state,
        list,
      };
    case CHECK_NODE_STATUS_SUCCESS:
      list = prepareData({
        online: true,
        name: action.res.node_name,
        loading: false,
      });
      return {
        ...state,
        list,
      };
    case CHECK_NODE_STATUS_FAILURE:
      list = prepareData({
        online: false,
        loading: false,
      });
      return {
        ...state,
        list,
      };
    default:
      return state;
  }
}
