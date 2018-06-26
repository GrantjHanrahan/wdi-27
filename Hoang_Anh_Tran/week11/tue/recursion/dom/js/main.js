// Write a recursive function to traverse through every element of the DOM


const traverseDOM = (node) => {
  // Check if node is valid
  if ( node ) {
    console.log("Traversing dom on node: ", node.nodeName)
    var children = node.childNodes

    for (var i = 0; i < children.length; i++){
        // Only get element type doms
        if ( children[i].nodeType === 1 ) {
          traverseDOM(traverseDOM(children[i]));
        } // end if children
    } // end for loop
  } // end if node

}; // traverseDOM

// node.nodeName
// node.className
// node.children - array of the child nodes for this current node
// add recursion! - nested structure, perfect for recursion


traverseDOM(document.body);



// BONUS FOR SHOWOFFS: try a non-recursive solution ... NASTY!
