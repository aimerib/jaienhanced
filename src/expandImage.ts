
function expandImage() {
  const images = findNodesWithImages();
  images.forEach(node => {
    node.addEventListener('click', openModal as EventListener);
    node.style.cursor = 'pointer';
  });
}

function openModal(event: MouseEvent) {
  const img = event.target as HTMLImageElement;
  const modalHtml = `
    <div id="modal" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      cursor: pointer;
    ">
      <img src="${img.src}" alt="${img.alt}-Expanded" style="
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        cursor: default;
      ">
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('modal')!;
  modal.addEventListener('click', closeModal);
}

function closeModal(event: MouseEvent) {
  const modal = document.getElementById('modal')!;
  if (event.target === modal) {
    modal.remove();
  }
}

function findNodesWithImages(): NodeListOf<HTMLImageElement> {
  return document.querySelectorAll("img[alt='Avatar']");
}

function areChatElementsLoaded() {
  const images = findNodesWithImages();
  return images.length > 0;
}

const imageObserver = new MutationObserver(function (_mutations) {
  if (areChatElementsLoaded()) {
    expandImage();
  }
});

imageObserver.observe(document, {
  childList: true,
  subtree: true
});
