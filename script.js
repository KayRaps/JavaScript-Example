const dynamicText = document.getElementById('dynamic-text');
const highlightButton = document.getElementById('highlight-button');

// Add a CSS class to the dynamicText element
function addHighlightClass() {
  dynamicText.classList.add('highlight');
}

// Remove the highlight class from the dynamicText element
function removeHighlightClass() {
  dynamicText.classList.remove('highlight');
}

// Toggle the highlight class on the dynamicText element
function toggleHighlightClass() {
  if (dynamicText.classList.contains('highlight')) {
    removeHighlightClass();
  } else {
    addHighlightClass();
  }
}

// Attach event listeners to the highlight button
highlightButton.addEventListener('click', toggleHighlightClass);

// Initial state: No highlight class
removeHighlightClass();