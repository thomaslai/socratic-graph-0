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
      return [...state, {}];
    default:
      return state;
  }
};
export default elements;
