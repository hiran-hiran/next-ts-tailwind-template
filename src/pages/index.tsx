import type { VFC } from 'react';
import Layout from 'src/components/layout/layout';

const Home: VFC = () => {
  const handleClick = () => {
    window.alert('Hello, World!');
  };

  return (
    <Layout>
      <button className="p-2 bg-gray-500 text-white" onClick={handleClick}>
        Click me!
      </button>
    </Layout>
  );
};

export default Home;
