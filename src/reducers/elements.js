const initialState = {
  nodes: [
    { data: { id: "one", text: "Node 1" } },
    { data: { id: "two", text: "Node 2" } }
  ],
  edges: [
    {
      data: {
        source: "one",
        target: "two",
        label: "Edge from Node1 to Node2"
      }
    }
  ]
};

const elements = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NODE":
      return { ...state };
    case "EDIT_NODE":
      const returnObject = {
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
      console.log("return object", returnObject);
      return returnObject;
    default:
      return state;
  }
};
export default elements;
