// returns an array of ids of the nodes that are descendants of the id
function getChildIds(id, edges) {
  var childIds = [id];
  // populate graph
  for (const edge of edges) {
    var source = edge.data.source;
    var target = edge.data.target;
    if (source === id) {
      childIds = [...childIds, ...getChildIds(target, edges)];
    }
  }
  return childIds;
}

function filterOutNodesWithIds(ids, nodes) {
  return nodes.filter((node, index) => {
    for (const id of ids) {
      if (node.data.id === id) {
        return false;
      }
    }
    return true;
  });
}

function filterOutEdgesWithTargetIds(ids, edges) {
  return edges.filter((edge, index) => {
    for (const id of ids) {
      if (edge.data.id === id) {
        return false;
      }
    }
    return true;
  });
}

module.exports = {
  getChildIds,
  filterOutNodesWithIds,
  filterOutEdgesWithTargetIds
};
