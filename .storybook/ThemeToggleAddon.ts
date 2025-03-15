// .storybook/ThemeToggleAddon.ts
import { addons, types } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { API } from '@storybook/api';

// Define addon ID
const ADDON_ID = 'themetoggle';
const TOOL_ID = `${ADDON_ID}/tool`;

type Theme = 'light' | 'dark';

// Register the addon
addons.register(ADDON_ID, (api: API) => {
  // Function to toggle theme
  const toggleTheme = (): void => {
    const currentTheme = (document.documentElement.getAttribute('data-theme') as Theme) || 'light';
    const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update document theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Update iframe themes
    try {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        try {
          const iframeDoc = iframe.contentDocument || (iframe.contentWindow?.document);
          if (iframeDoc) {
            iframeDoc.documentElement.setAttribute('data-theme', newTheme);
          }
        } catch (e) {
          // Ignore cross-origin iframes
        }
      });
    } catch (e) {
      console.warn('Could not update iframe themes', e);
    }
    
    // Force Storybook to re-render
    api.emit(FORCE_RE_RENDER);
  };
  
  // Add a tool to the Storybook toolbar
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Toggle Theme',
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => {
      const buttonElement = document.createElement('button');
      const currentTheme = (document.documentElement.getAttribute('data-theme') as Theme) || 'light';
      
      // Style the button
      buttonElement.style.border = 'none';
      buttonElement.style.background = 'transparent';
      buttonElement.style.cursor = 'pointer';
      buttonElement.style.padding = '0';
      buttonElement.style.display = 'flex';
      buttonElement.style.alignItems = 'center';
      buttonElement.style.justifyContent = 'center';
      buttonElement.title = `Toggle ${currentTheme === 'dark' ? 'light' : 'dark'} theme`;
      
      // Set button content
      buttonElement.innerHTML = currentTheme === 'dark' 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
             <circle cx="12" cy="12" r="5"></circle>
             <line x1="12" y1="1" x2="12" y2="3"></line>
             <line x1="12" y1="21" x2="12" y2="23"></line>
             <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
             <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
             <line x1="1" y1="12" x2="3" y2="12"></line>
             <line x1="21" y1="12" x2="23" y2="12"></line>
             <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
             <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
           </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
             <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
           </svg>`;
      
      // Add click handler
      buttonElement.addEventListener('click', toggleTheme);
      
      return buttonElement;
    }
  });
});

export {};