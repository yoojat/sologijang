import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import PortfolioItem from '@components/PortfolioItem';

const Header = tw.div`
  text-center
  relative
  hidden
  sm:block
`;

const TopGradient = tw.div`
  bg-gradient-to-b
  from-rose-400
    pt-52
    pb-4
  
  `;

const TopSmallTitle = tw.div`
  pb-3
  tracking-widest
  font-light
`;
const TopTitle = tw.h1`
text-[#FF3E53]
  text-md
  font-semibold
  break-words
  mt-20
`;
const TopSubtitle = tw.h2`
  pt-1
  text-sm
  pb-7
`;
const IntroduceSection = tw.section`
  pt-5
  flex
  flex-col
  items-center
  justify-center
`;

const IntroduceItem = styled.div``;
const IntroduceImageContainer = tw.div`
text-center
-z-50
  drop-shadow-2xl
}`;
const IntroduceText = tw.div`
  mt-8
  sm:bg-white
  p-5
`;
const IntroduceTitle = tw.h2`
  text-center
  font-bold
  text-2xl
  text-rose-500
  `;
const IntroduceDescription = tw.p`
  text-center
  text-xs
  font-light
  mt-2
  mb-2
`;

const MobileHeader = tw.div`
sm:hidden
`;

const Portfolio: NextPage = () => {
  return (
    <>
      <Header>
        <TopGradient></TopGradient>
        <TopSmallTitle>간절히 바라면 이루어진다.</TopSmallTitle>
        <div className='text-5xl'>솔로 기장</div>
        <div className='absolute top-48 w-full text-center'>
          <Image
            alt={'솔로기장 펜글씨'}
            src='/sologijang_pen.png'
            width={250}
            height={250}
            objectFit={'contain'}
            className={'mx-auto'}
          />
        </div>
        <TopTitle>당신을 보여주세요.</TopTitle>
        <TopSubtitle>
          지금까지 당신을 보여줄 기회가 그리 많이 없었을 겁니다.
          <br />
          <span className='font-bold'>여기서 마음껏 당신을 보여주세요.</span>
        </TopSubtitle>
      </Header>
      <MobileHeader>
        <Image
          alt='특별한 2박 3일을 위해'
          src='/join_main.png'
          width={825}
          height={1100}
          objectFit='contain'
        />
      </MobileHeader>

      <div className='bg-red mx-auto hidden h-44 w-0 border-r-2 border-slate-400 sm:block'></div>
      <IntroduceSection>
        <IntroduceItem className='w-full max-w-7xl items-center '>
          <IntroduceText>
            <IntroduceTitle>우리는 남매입니다.</IntroduceTitle>
            <div className='text-center font-light'>
              기장에 20년 이상 살아 왔죠.
            </div>
            <IntroduceDescription>
              어릴 땐 자주 싸우긴 했지만 철이 든 지금은
              <br />
              누구보다 호흡이 잘 맞습니다.
              <br />
              어떤 일을 해도
              <br />
              “남매가 일을 잘한다.”라는 말을 들어왔습니다.
              <br />
              <Image
                src='/operators.png'
                width={400}
                height={300}
                alt='운영자'
                objectFit='contain'
              />
              <br />
              오빠인 저는
              <br />
              축가, 사회, 행사 진행 등 이벤트를 기획하는 전문가입니다.
              <br />
              <br />
              <div className='text-center'>
                <Image
                  src='/ty.jpeg'
                  alt='운영자 김태영'
                  width={700}
                  height={450}
                  objectFit='contain'
                />
                <div className='font-bold text-blue-400'>운영자 김태영</div>
              </div>
              <br />
              행사 진행을 하면서
              <br />
              감동과 재미를 주는 일을 할 때가 가장 행복하죠.
              <br />
              <br />
              이제는 여러분들의 인연을 찾는 일에
              <br />
              감동을 드리도록 하겠습니다.
              <br />
              <br />
              <span className='font-bold'>믿고 신청해 주세요!</span>
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
        <IntroduceItem className='w-full max-w-7xl items-center'>
          <IntroduceText>
            <IntroduceTitle>왜 기장이죠?</IntroduceTitle>
            <IntroduceDescription>
              저희 운영자들은 20년 넘게 기장에서 살아왔습니다.
              <br />
              데이트하러 온 사람들을 많이 봐왔죠.
              <br />
              <br />
              기장은 커플이 데이트하러 오기 좋은 장소가 아닙니다.
              <br />
              커플이 되기 좋은 장소입니다.
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
        <IntroduceItem className='w-full max-w-7xl items-center'>
          <IntroduceImageContainer>
            <Image
              src='/sea.jpg'
              alt='사랑에 최선을'
              width={700}
              height={450}
              objectFit='contain'
            />
          </IntroduceImageContainer>
          <IntroduceText>
            <IntroduceTitle>신청에 망설여지시나요?</IntroduceTitle>
            <div className='text-center font-light'>
              용기 있는 자만, 앞으로 나아갑니다.
            </div>
            <IntroduceDescription>
              연인을 찾는다는 강박은 내려두고
              <br />
              편한 마음으로 오시기 바랍니다.
              <br />
              <br />
              저희는 인연을 찾는 여정을 제공합니다.
              <br />
              <br />
              사랑을 찾아가는 과정은
              <br />
              자기 자신을 찾아가는 과정이기도 합니다.
              <br />
              <br />
              <span className=' font-bold'>많은 걸 얻어 가세요.</span>
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
        <div className='-mb-10'>
          <Image
            src='/operators_bottom.png'
            width={1200}
            height={760}
            alt='사랑찾기'
            objectFit='contain'
          />
        </div>
      </IntroduceSection>
    </>
  );
};

export default Portfolio;
