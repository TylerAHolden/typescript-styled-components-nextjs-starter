import { GetStaticProps } from 'next';
import Head from 'next/head';
import SVG_Works from '../svg/SVG_Works.svg';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

type Props = {};

const StyledSVG_Works = styled(SVG_Works)`
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
      <StyledSVG_Works />
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
