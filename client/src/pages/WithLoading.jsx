import { useState, useEffect } from 'react';
import { ClockLoader } from 'react-spinners';
import PropTypes from 'prop-types';

const WithLoading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      } finally {
        setIsLoading(false);
      }
    };

    loadApp();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-4">
        <div className="text-green-600 my-4 text-4xl font-bold text-center">
          Welcome to the Denys Lysenko`s Blog
        </div>
        <ClockLoader color="#569d83" size={50} />
        <div className="text-lg text-gray-800 my-2 text-center">
          <p>Loading, please wait...</p>
          <p>
            Performance may be slower as we are on a free plan. Thank you for
            your patience!
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

WithLoading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithLoading;
