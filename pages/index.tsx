/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import BodyItem from '@components/BodyItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import useWindowSize from '@libs/useWindowSize';
import { mediaSize } from '@libs/media';

const TopSection = tw.div`
  relative
`;

const TopContentContainer = tw.div`
  hidden
  sm:flex
  lg:justify-between
  lg:items-center
  flex-wrap
  max-w-screen-lg
  mx-auto
  absolute
  bottom-40
  w-full
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
  text-rose-500
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
const ButtonContainer = tw.div`
  text-center
  absolute
  sm:relative
  w-full
  bottom-1
  sm:bottom-0
  sm:mt-10
  `;
const ContactBtn = tw.button`
border-2
border-rose-400
text-rose-400
  w-4/5
  rounded-md
  py-3
  mb-3
  font-bold
  cursor-pointer
hover:bg-rose-200
hover:text-white
  transition-all
  duration-300
  active:bg-rose-100
  max-w-3xl
`;

const ImageContainer = tw.div`
  relative
  `;

const BodySection = tw.section`
  space-y-24
  sm:mt-20
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
  const windowSize = useWindowSize();
  return (
    <>
      <TopSection>
        {windowSize &&
        windowSize.width &&
        windowSize.width > mediaSize.mobile ? (
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            interval={5000}
          >
            <Image
              alt='배경1'
              src='/bg/bg1.png'
              width={5000}
              height={2813}
              objectFit='contain'
            />
            <Image
              alt='배경2'
              src='/bg/bg2.png'
              width={5000}
              height={2813}
              objectFit='contain'
            />
            <Image
              alt='배경3'
              src='/bg/bg3.png'
              width={5000}
              height={2813}
              objectFit='contain'
            />
            <Image
              alt='배경4'
              src='/bg/bg4.png'
              width={5000}
              height={2813}
              objectFit='contain'
            />
            <Image
              alt='배경'
              src='/bg/bg5.png'
              width={5000}
              height={2813}
              objectFit='contain'
            />
            <Image
              alt='배경'
              src='/bg/bg6.png'
              width={5000}
              height={2813}
              objectFit='contain'
            />
          </Carousel>
        ) : (
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            interval={5000}
          >
            <Image
              alt='모바일 메인 이미지1'
              src='/mobile_bg/001.png'
              width={750}
              height={1000}
              objectFit='contain'
            />
            <Image
              alt='모바일 메인 이미지2'
              src='/mobile_bg/002.png'
              width={750}
              height={1000}
              objectFit='contain'
            />
            <Image
              alt='모바일 메인 이미지3'
              src='/mobile_bg/003.png'
              width={750}
              height={1000}
              objectFit='contain'
            />
          </Carousel>
        )}

        <TopContentContainer>
          <HeadSection>
            <TitleContainer>
              <TopSmallTitle>
                <h3 className='hidden sm:block'>현실 커플 매치</h3>
              </TopSmallTitle>
              <BigTitle>
                <h1>솔로 모집 중!</h1>
              </BigTitle>
              <SubText>
                <span>2박 3일간 인연을 찾을 수 있는 기회를 드립니다.</span>
                <br />
                <span className='hidden sm:block'>
                  솔로 기장의 주인공이 되어보세요!
                </span>
              </SubText>
            </TitleContainer>
          </HeadSection>
        </TopContentContainer>
        <ButtonContainer>
          <Link href={'/join'}>
            <a>
              <ContactBtn>신청하기</ContactBtn>
            </a>
          </Link>
        </ButtonContainer>
      </TopSection>
      <BodySection>
        <BodyItem
          imageSrc={'/index_imgs/1.png'}
          imageAlt={'나는솔로'}
          titleDescription={
            '<div style="font-weight:lighter;">현재<br/><span style="font-weight:bold;">솔로</span><br/>이신가요?<div>'
          }
          subtitleDescription={'변화를 시도해보세요'}
          smallDescriptionTitle={'그냥 신청만 해주세요.'}
          smallSubDescriptionContents={[
            '매일 마주하는 일상의 틀을 벗어나 새로운 사람을 만날 수 있게 해드릴게요.',
            '새로운 연인을 만날 설렘에 두근거리지 않나요?',
          ]}
        />
        <BodyItem
          imageSrc={'/index_imgs/2.png'}
          imageAlt={'what are you waiting for'}
          titleDescription={
            '<div style="font-weight:lighter;"><span style="font-weight:bold;">무엇을</span><br/>기다리고<br/>계신가요?<div>'
          }
          subtitleDescription={'먼저 움직이세요!'}
          smallDescriptionTitle={'저희가 도와드릴게요.'}
          smallSubDescriptionContents={[
            '마음이 가는 대로, 심장이 시키는 대로 하세요.',
            '그리 어려울 건 없습니다.',
            '단, 가벼운 마음은 안됩니다.',
          ]}
        />
        <div className='flex justify-center text-[#FD4155]'>
          <div className='-space-y-5 px-5 text-xs'>
            <div className='flex h-24 w-24 items-center justify-center rounded-full border-2 border-rose-200 text-center'>
              간절한
              <br />
              마음
            </div>
            <div className='flex h-24 w-24 items-center justify-center rounded-full border-2 border-rose-200 text-center'>
              진지한
              <br />
              마음
            </div>
            <div className='flex h-24 w-24 items-center justify-center rounded-full border-2 border-rose-200 text-center'>
              진정한
              <br />
              사랑을
              <br />
              찾기 위한 다짐
            </div>
          </div>
          <div>
            <div className='pb-5 text-2xl font-light'>
              <span className='font-bold'>연애를</span>
              <br />
              간절히
              <br />
              원하시는 분만
              <br />
              지원해 주세요.
            </div>
            <div className='pb-5 text-xs font-semibold'>
              정말 간절한 분들에게만 기회를 드리고 싶습니다.
            </div>
            <div className='text-xs font-light'>
              <p>
                가벼운 마음으로 오는 곳이 아닙니다.
                <br />
                진정한 사랑을 찾고 싶은 사람들을 위한 시간입니다.
                <br />
                어설픈 마음은 정중히 거절하겠습니다.
              </p>
            </div>
          </div>
        </div>
        <div
          className="
          w-full
          bg-[url('/index_imgs/3.png')]
          bg-cover
          text-right
          "
        >
          <div className='py-16'>
            <div className='mr-7 inline-block bg-white p-3 text-left'>
              <div className='text-2xl font-light text-rose-500'>
                <span className='font-bold'>솔로가</span>
                <br />
                <span className='font-bold'>커플이</span>
                되는 곳, 솔로기장
              </div>
              <div className='my-3 text-rose-300'>
                이곳에서 만들어지는 무궁무진한 사랑이야기
              </div>
              <div className='text-rose-300'>
                생각은 누구나 할 수 있습니다.
                <br />
                하지만 행동은 아무나 할 수 없습니다.
                <br />
                <span className='font-bold text-rose-400'>
                  지금 바로 여러분의 사랑을 찾아보세요
                </span>
              </div>
            </div>
          </div>
        </div>
      </BodySection>
    </>
  );
};

export default Home;
