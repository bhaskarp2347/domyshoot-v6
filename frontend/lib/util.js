export const listToTree = (list) => {
  let map = {}, node, roots = [], i;
  for (i = 0; i < list.length; i += 1) {
    map[list[i].id] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    let pd = node.attributes.parent.data
    if (pd) {
      // if you have dangling branches check that map[node.parentId] exists
      list[map[pd.id]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}