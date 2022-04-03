/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import BodyItem from '@components/BodyItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const TopSection = tw.div`
  pb-5
  relative
`;

const TopContentContainer = tw.div`
  flex
  lg:justify-between
  lg:items-center
  flex-wrap
  max-w-screen-lg
  mx-auto
  absolute
  bottom-28
  w-full
  sm:bottom-40
  lg:bottom-64
  md:left-20
`;

const HeadSection = tw.section`
  w-full
  lg:w-auto
`;
const ImageSection = tw.section`
  hidden
  lg:block
`;

const TitleContainer = tw.div`
mt-16
sm:mt-0
mx-12
`;
const TopSmallTitle = tw.div`
text-rose-200
font-medium
  pb-1
  text-sm
  sm:text-lg
  text-shadow-lg
`;
const BigTitle = tw.div`
  text-rose-300
  text-2xl
  font-bold
  break-words
  sm:text-5xl
`;
const SubText = tw.div`
  pt-1
  text-white
  font-medium
  text-md
  pb-7
  sm:text-lg
  text-shadow-lg
`;
const ButotnContainer = tw.div`
mt-10
  text-center
  `;
const ContactBtn = tw.button`
  bg-[#FF3E53]
  w-4/5
  rounded-md
  py-3
  mb-3
  text-white
  font-bold
  cursor-pointer
hover:bg-red-500
  transition-all
  duration-300
  active:bg-red-400
  max-w-3xl
`;

const ImageContainer = tw.div`
  relative
  `;

const BodySection = tw.section`
  mt-20
  space-y-24
`;

const MessageSection = tw.section`
  bg-red-50
  mt-20
  flex
  justify-between
  flex-wrap
`;

const MessageContentContainer = tw.div`
  max-w-7xl
  px-10
  lg:pl-40
  pt-10
  pb-10

`;

const MessageTitle = tw.h1`
  font-normal
  text-2xl
  mb-7
`;

const MessageSubtitle = tw.div`
  text-slate-500
  font-normal
`;

const MessageSubtitleHead = tw.h3`
  pb-1 font-medium text-slate-900`;
const MessaegSubtitleContent = tw.p`
`;

const MessageImgContainer = tw.div`
  w-full
  md:w-96
  h-60
  relative
`;

const Home: NextPage = () => {
  return (
    <>
      <TopSection>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          interval={5000}
        >
          <div>
            <img alt='배경1' src='bg/bg1.png' />
          </div>
          <div>
            <img alt='배경2' src='bg/bg2.png' />
          </div>
          <div>
            <img alt='배경3' src='bg/bg3.png' />
          </div>
          <div>
            <img alt='배경4' src='bg/bg4.png' />
          </div>
          <div>
            <img alt='배경5' src='bg/bg5.png' />
          </div>
          <div>
            <img alt='배경6' src='bg/bg6.png' />
          </div>
        </Carousel>
        <TopContentContainer>
          <HeadSection>
            <TitleContainer>
              <TopSmallTitle>
                <h3 className='hidden sm:block'>현실 커플 매치</h3>
              </TopSmallTitle>
              <BigTitle>
                <h1>솔로 모집중!</h1>
              </BigTitle>
              <SubText>
                <span>2박 3일간 인연을 찾을 수 있는 기회를 드립니다.</span>
                <br />
                <span className='hidden sm:block'>
                  솔로기장의 주인공이 되어보세요!
                </span>
              </SubText>
            </TitleContainer>
          </HeadSection>
        </TopContentContainer>
        <ButotnContainer>
          <Link href={'/join'}>
            <a>
              <ContactBtn>신청하기</ContactBtn>
            </a>
          </Link>
        </ButotnContainer>
      </TopSection>
      <BodySection>
        <BodyItem
          imageSrc={'/single.jpg'}
          imageAlt={'web_consulting'}
          titleDescription={'현재 솔로이신가요?'}
          subtitleDescription={'변화를 시도해보세요'}
          smallDescriptionTitle={'그냥 신청만 해주세요.'}
          smallSubDescriptionContents={[
            '매일 마주하는 일상의 틀을 벗어나 새로운 사람을 만날 수 있게 해드릴게요.',
            '새로운 연인을 만날 설레임에 두근거리지 않나요?',
          ]}
        />
        <BodyItem
          imageSrc={'/wait.jpg'}
          imageAlt={'what are you waiting for'}
          titleDescription={'무엇을 기다리고 계신가요?'}
          subtitleDescription={'먼저 움직이세요!'}
          smallDescriptionTitle={'저희가 도와드릴게요.'}
          smallSubDescriptionContents={[
            '마음이 가는대로, 심장이 시키는대로 하세요',
            '그리 어려울건 없습니다.',
            '단, 가벼운 마음은 안됩니다.',
          ]}
        />
        <BodyItem
          imageSrc={'/marry.jpg'}
          imageAlt={'pls only seriously people'}
          titleDescription={'결혼을 간절히 원하시는 분만 지원해주세요!'}
          subtitleDescription={'정말 간절한 분들에게만 기회를 드리고 싶습니다.'}
          smallDescriptionTitle={'가벼운 마음으로 오는 곳이 아닙니다.'}
          smallSubDescriptionContents={[
            '진정한 사랑을 찾기 위한 사람들을 위한 시간입니다.',
            '어설픈 마음은 정중히 거절하겠습니다.',
          ]}
        />
      </BodySection>
      <MessageSection>
        <MessageContentContainer>
          <MessageTitle>솔로가 커플이 되는 곳, 솔로기장</MessageTitle>
          <MessageSubtitle>
            <MessageSubtitleHead>
              솔로기장, 그곳에서 만들어지는 무궁무진한 이야기
            </MessageSubtitleHead>
            <MessaegSubtitleContent>
              생각은 누구나 할 수 있습니다.
              <br />
              하지만 행동은 아무나 할 수 없습니다.
              <br />
              지금 바로 여러분의 사랑을 찾아보세요.
            </MessaegSubtitleContent>
          </MessageSubtitle>
        </MessageContentContainer>
        <MessageImgContainer>
          <Image
            src='/couple.jpg'
            alt='move yourself'
            layout='fill'
            objectFit='cover'
            // width={800}
            // height={600}
          />
        </MessageImgContainer>
      </MessageSection>
    </>
  );
};

export default Home;
