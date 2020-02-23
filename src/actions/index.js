let nextNodeId = 0;
export const addNode = text => ({
  type: "ADD_NODE",
  id: nextNodeId++,
  text
});
