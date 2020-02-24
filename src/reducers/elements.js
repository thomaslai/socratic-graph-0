import * as tools from "../helpers/graphTools";

const initialState = {
  nodes: [
    { data: { id: "one", text: "Node 1" } },
    { data: { id: "two", text: "Node 2" } }
  ],
  edges: [
    {
      data: {
        source: "one",
        target: "two"
      }
    }
  ]
};

const elements = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NODE":
      return { ...state };
    case "REMOVE_NODE":
      // remove all child nodes
      // remove all edges with reference to the child nodes
      const childIdsToRemove = tools.getChildIds(action.id, state.edges);
      return {
        ...state,
        nodes: tools.filterOutNodesWithIds(childIdsToRemove, state.nodes),
        edges: tools.filterOutEdgesWithTargetIds(childIdsToRemove, state.edges)
      };
    case "EDIT_NODE":
      return {
        ...state,
        nodes: state.nodes.map((node, index) => {
          if (node.data.id !== action.id) {
            return node;
          } else {
            return {
              data: {
                id: node.data.id,
                text: action.text
              }
            };
          }
        })
      };
    default:
      return state;
  }
};
export default elements;
