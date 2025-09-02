// This utility prevents default behavior for all interactive elements except those in the Navbar
export const disableInteractions = () => {
  if (typeof window === 'undefined') return;

  const handleClick = (e) => {
    // Allow clicks within the navbar
    const nav = document.querySelector('nav');
    if (nav && nav.contains(e.target)) {
      return; // Allow clicks within navbar
    }
    
    // Prevent default for all other interactive elements
    const interactiveSelectors = [
      'a:not([href^="#"])', // All links except anchor links
      'button:not(disabled)',
      'input:not([type="hidden"]):not([type="file"]):not(disabled)',
      'select:not(disabled)',
      'textarea:not(disabled)',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
      '[role="button"]',
      '[role="link"]',
      '[role="menuitem"]',
      '[role="tab"]',
      '[role="option"]',
      '[onclick]',
      '[onmousedown]',
      '[onmouseup]',
      '[onkeydown]',
      '[onkeyup]',
      '[onkeypress]',
      '[onfocus]',
      '[onblur]',
      '[onchange]',
      '[onsubmit]',
      '[oninput]',
      '[oninvalid]',
      '[onreset]',
      '[onsearch]',
      '[onselect]',
      '[onsubmit]'
    ].join(',');

    if (e.target.matches(interactiveSelectors)) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }
  };

  // Add event listeners
  document.addEventListener('click', handleClick, true);
  document.addEventListener('mousedown', handleClick, true);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(e);
    }
  }, true);

  // Cleanup function
  return () => {
    document.removeEventListener('click', handleClick, true);
    document.removeEventListener('mousedown', handleClick, true);
    document.removeEventListener('keydown', handleClick, true);
  };
};

// Function to re-enable interactions
export const enableInteractions = () => {
  if (typeof window === 'undefined') return;
  
  // This will be used if we need to re-enable interactions later
  const enableClick = (e) => {
    e.stopPropagation();
  };
  
  document.removeEventListener('click', enableClick, true);
};
