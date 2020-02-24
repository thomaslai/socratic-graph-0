let nextNodeId = 0;
export const addNode = text => ({
  type: "ADD_NODE",
  id: nextNodeId++,
  text
});
export const editNode = (id, text) => ({
  type: "EDIT_NODE",
  id,
  text
});
