import { useEffect, useRef } from 'react';

export const useScrollRestoration = () => {
  const scrollPositionRef = useRef<number>(0);

  useEffect(() => {
    // Save scroll position before page unload
    const saveScrollPosition = () => {
      scrollPositionRef.current = window.scrollY;
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      sessionStorage.setItem('scrollTimestamp', Date.now().toString());
    };

    // Restore scroll position after page load
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      const savedTimestamp = sessionStorage.getItem('scrollTimestamp');
      
      if (savedPosition && savedTimestamp) {
        const timestamp = parseInt(savedTimestamp);
        const now = Date.now();
        
        // Only restore if the timestamp is recent (within 5 minutes)
        if (now - timestamp < 5 * 60 * 1000) {
          // Use requestAnimationFrame for smooth restoration
          requestAnimationFrame(() => {
            window.scrollTo({
              top: parseInt(savedPosition),
              behavior: 'instant' // Use instant to avoid animation
            });
          });
        }
        
        // Clean up after restoration
        sessionStorage.removeItem('scrollPosition');
        sessionStorage.removeItem('scrollTimestamp');
      }
    };

    // Handle beforeunload event
    window.addEventListener('beforeunload', saveScrollPosition);
    
    // Handle page load/refresh
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', restoreScrollPosition);
    } else {
      // If page is already loaded, restore immediately
      restoreScrollPosition();
    }

    // Handle popstate (back/forward navigation)
    window.addEventListener('popstate', restoreScrollPosition);

    // Handle visibility change (when user switches tabs and comes back)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        restoreScrollPosition();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      document.removeEventListener('DOMContentLoaded', restoreScrollPosition);
      window.removeEventListener('popstate', restoreScrollPosition);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Function to manually save current scroll position
  const saveCurrentScrollPosition = () => {
    scrollPositionRef.current = window.scrollY;
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    sessionStorage.setItem('scrollTimestamp', Date.now().toString());
  };

  // Function to manually restore scroll position
  const restoreCurrentScrollPosition = () => {
    if (scrollPositionRef.current > 0) {
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'instant'
      });
    }
  };

  return {
    saveCurrentScrollPosition,
    restoreCurrentScrollPosition,
    currentScrollPosition: scrollPositionRef.current
  };
};
