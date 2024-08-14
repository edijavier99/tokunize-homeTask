import React, { useState, Suspense, useMemo } from 'react';
import { SidebarAdmin } from '../components/sidebar';

const LazyNewsLetterList = React.lazy(()=>import("../components/newsletterList"))

export const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('Newsletter List');

  const onClickHandle = (componentName) => {
    setSelectedComponent(componentName);
  };

  // We use this function to memorize this componente
  const MemoizedComponent = useMemo(() => {
    switch (selectedComponent) {
      case 'Newsletter List':
        return <LazyNewsLetterList />;
      default:
        return null;
    }
  }, [selectedComponent]);
  
  return (
    <div className="d-flex">
      <SidebarAdmin onClickHandle={onClickHandle} />
      <div className="flex-grow-1">
        <Suspense fallback={<div>Loading...</div>}>
          {MemoizedComponent}
        </Suspense>
      </div>
    </div>
  );
};