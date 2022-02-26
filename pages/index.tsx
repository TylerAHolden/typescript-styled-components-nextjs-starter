import { GetStaticProps } from 'next';
import Head from 'next/head';
import UnderConstruction from '../svg/under_construction.svg';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

type Props = {};

const StyledUnderConstruction = styled(UnderConstruction)`
  width: 500px;
  margin: auto;
`;

export const Home: React.FC<Props> = () => {
  useEffect(() => {
    toast.success('LETS GOOOOOOO', { duration: 6000 });
  }, []);

  return (
    <div>
      <Head>
        <title>typescript-styled-components-nextjs-starter</title>
      </Head>
      <h1>typescript-styled-components-nextjs-starter</h1>
      <StyledUnderConstruction />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data: any[] = [];
  return {
    // revalidate: 43200, // 12 hours
    props: {
      data,
    },
  };
};
