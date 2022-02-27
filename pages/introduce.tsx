import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import PortfolioItem from '@components/PortfolioItem';

const Header = tw.div`
  pt-14
  px-10
  pb-4
  bg-white
  text-center
`;

const TopSmallTitle = tw.div`
text-red-300
  font-medium
  pb-8
`;
const TopTitle = tw.h1`
text-[#FF3E53]
  text-3xl
  break-words
`;
const TopSubtitle = tw.h2`
  pt-7
  text-red-300
  font-medium
  text-lg
  pb-7
`;
const IntroduceSection = tw.section`
  pt-10
  pb-10
  px-10
  bg-red-300
  shadow-2xl
  flex
  flex-col
  items-center
  justify-center
  space-y-32
`;

const Portfolio: NextPage = () => {
  return (
    <>
      <Header>
        <TopSmallTitle>솔로 기장 - 간절히 바라면 이루어집니다.</TopSmallTitle>
        <TopTitle>당신을 보여주세요.</TopTitle>
        <TopSubtitle>
          지금까지 당신을 보여줄 기회가 그리 많이 없었을 겁니다.
          <br />
          여기서 마음껏 당신을 보여주세요.
        </TopSubtitle>
      </Header>
      <IntroduceSection></IntroduceSection>
    </>
  );
};

export default Portfolio;
