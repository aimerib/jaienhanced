
function hideBlocked() {
  const blockedBots = findNodesWithText('Blocked');
  blockedBots.forEach(node => {
    const botCard = node.parentNode?.parentNode?.parentNode?.parentNode;
    if (botCard) {
      (botCard as HTMLElement).style.display = 'none';
    }
  });
}

function findNodesWithText(text: string): Node[] {
  const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
          acceptNode: (node: Text) => {
              if (node.nodeValue?.includes(text)) {
                  return NodeFilter.FILTER_ACCEPT;
              }
              return NodeFilter.FILTER_SKIP;
          }
      },
  );

  let nodes: Node[] | null = [];
  let currentNode: Node | null;
  while (currentNode = walker.nextNode()) {
    nodes.push(currentNode.parentNode!);
  }
  return nodes;
}

function areElementsLoaded() {
  return document.querySelector('.chakra-stack') !== null && document.querySelectorAll('.chakra-stack').length > 4;
}

const observer = new MutationObserver(function (_mutations) {
  if (areElementsLoaded()) {
    hideBlocked();
  }
}
);

observer.observe(document, {
  childList: true,
  subtree: true
});
