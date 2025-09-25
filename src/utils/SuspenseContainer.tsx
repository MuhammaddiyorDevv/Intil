import { Suspense } from 'react';
import type { ReactNode } from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-48 text-lg text-blue-500">
    Yuklanmoqda...
  </div>
);

interface SuspenseContainerProps {
  children: ReactNode;
}

const SuspenseContainer: React.FC<SuspenseContainerProps> = ({ children }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
};

export default SuspenseContainer;