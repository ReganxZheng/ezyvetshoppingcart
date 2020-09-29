import { useState } from 'react';

export const useDrawerProps = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return {
    isDrawerOpen,
    openDrawer: () => {
      setIsDrawerOpen(true);
    },
    closeDrawer: () => {
      setIsDrawerOpen(false);
    },
  };
};
