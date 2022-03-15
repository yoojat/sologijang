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
  bg-orange-50
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
  text-red-400
  font-medium
  text-lg
  pb-7
`;
const IntroduceSection = tw.section`
  pt-10
  pb-10
  px-3
  shadow-2xl
  flex
  flex-col
  items-center
  justify-center
  space-y-10
`;

const IntroduceItem = styled.div`
  @media (min-width: 1024px) {
    &:nth-child(2n + 1) {
      h2 {
        text-align: right;
      }
      p {
        text-align: right;
      }
      div:nth-child(2n + 1) {
        margin-left: -200px;
      }
    }
    &:nth-child(2n) {
      h2 {
        text-align: left;
      }
      p {
        text-align: left;
      }
      div:nth-child(2n + 1) {
        margin-right: -200px;
      }
    }
  }
`;
const IntroduceImageContainer = tw.div`
text-center
-z-50
span{
  drop-shadow-2xl
}
`;
const IntroduceText = tw.div`
  mt-2
  sm:bg-white
  p-5
  xl:p-5
  sm:mt-0
  drop-shadow-2xl
`;
const IntroduceTitle = tw.h2`
  text-center
  font-bold
  text-xl
  pb-2
  `;
const IntroduceDescription = tw.p`
  text-center
  text-sm
  font-normal
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
      <IntroduceSection>
        <IntroduceItem className='w-full max-w-7xl items-center odd:flex-row-reverse lg:flex lg:space-x-10'>
          <IntroduceImageContainer>
            <Image
              src='/siblings.jpg'
              alt='남매'
              width={700}
              height={450}
              objectFit='contain'
            />
          </IntroduceImageContainer>
          <IntroduceText>
            <IntroduceTitle>저희는 남매입니다.</IntroduceTitle>
            <IntroduceDescription>
              운영자인 저희는 친남매입니다.
              <br />
              어릴 땐 자주 싸우긴 했지만 철이 든 지금은 누구보다 호흡이 잘
              맞습니다.
              <br />
              어떤일을 해도 “남매가 일을 잘한다.”라는 말을 들어왔습니다.
              <br />
              오빠인 저는 축가, 사회, 행사 진행 등 이벤트를 기획하는
              전문가입니다.
              <br />
              행사 진행을 하면서 감동과 재미를 주는 일을 할 때가 가장 행복하죠.
              <br />
              이제는 여러분들의 인연을 찾는 일에 감동을 드리도록 하겠습니다.
              <br />
              믿고 신청해주세요!
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
        <IntroduceItem className='w-full max-w-7xl items-center odd:flex-row-reverse lg:flex lg:space-x-10'>
          <IntroduceImageContainer>
            <Image
              src='/sea.jpg'
              alt='기장바다'
              width={700}
              height={450}
              objectFit='contain'
            />
          </IntroduceImageContainer>
          <IntroduceText>
            <IntroduceTitle>왜 기장이죠?</IntroduceTitle>
            <IntroduceDescription>
              저희 운영자들은 10년 넘게 기장에서 살아 왔습니다.
              <br />
              데이트 하러 온 사람들을 많이 봐왔죠.
              <br />
              기장은 커플이 데이트하러 오기 좋은 장소가 아닙니다.
              <br />
              커플이 되기 좋은 장소입니다.
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
        <IntroduceItem className='w-full max-w-7xl items-center odd:flex-row-reverse lg:flex lg:space-x-10'>
          <IntroduceImageContainer>
            <Image
              src='/dothebestlove.jpg'
              alt='사랑에 최선을'
              width={700}
              height={450}
              objectFit='contain'
            />
          </IntroduceImageContainer>
          <IntroduceText>
            <IntroduceTitle>신청에 망설여지시나요?</IntroduceTitle>
            <IntroduceDescription>
              연인을 찾는 다는 강박은 내려두고 편한 마음으로 오시기 바랍니다.
              <br />
              저희는 커플이 되는 과정을 제공합니다.
              <br />
              사랑을 찾아가는 과정은 자기 자신을 찾아가는 과정이기도 합니다.
              <br />
              많은 걸 얻어가세요.
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
      </IntroduceSection>
    </>
  );
};

export default Portfolio;
