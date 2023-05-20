import { useEffect } from 'react';

function useDynamicTitle(newTitle) {
  useEffect(() => {
    document.title = document.title + ' | ' + newTitle;
  }, [newTitle]);
}

export default useDynamicTitle;
