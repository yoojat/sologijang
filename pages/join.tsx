import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import PortfolioItem from '@components/PortfolioItem';

const Header = tw.div`
  pt-36
  px-10
  pb-20
  bg-[url('/mobile_bg/mobile_main7.png')]
  bg-cover
  text-center
`;

const TopSmallTitle = tw.div`
text-rose-50
  font-medium
  pb-4
  text-shadow-sm
`;
const TopTitle = tw.h1`
text-rose-400
  text-3xl
  break-words
  font-normal
  text-shadow-sm

`;
const TopSubtitle = tw.h2`
  pt-4
  text-rose-100
  font-medium
  text-lg
  pb-7
  text-shadow-lg
`;
const MailInfoSection = tw.section`
  pt-10
  pb-10
  px-10
  bg-orange-100
  shadow-2xl
  flex
  flex-col
  lg:flex-row
  space-y-10
  items-center
  justify-center
  lg:space-x-10
`;

const MailInfoItem = tw.div`
text-white
  font-medium
  flex
  flex-col
  space-y-10
  lg:flex-row space-x-10
`;

const MailInfoDescription = tw.div`
font-bold
text-red-400
bg-white
p-10
shadow-md
text-center
text-xl
w-full
`;

const PhotoContainer = tw.div`
  flex
  items-start
  -space-x-36
`;

const PhotoItem = styled.div`
  & > span {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  &:first-child {
    margin-top: 5rem;
  }
`;

const LoveMessageContainer = tw.div`
  bg-yellow-50
  text-red-400
  p-10
  text-lg
  text-center
  leading-10
  shadow-md
  flex
  justify-center
  items-center
  flex-col
  space-x-3
`;
const LoveMessage = tw.div``;
const PCView = tw.div`
hidden
sm:block
`;
const MobileView = tw.div`
bg-[url('/join_bg.png')]
bg-cover
sm:hidden
`;
const IntroduceMessage = tw.div`
  text-center
  pt-[80%]
  sm:pt-[30rem]
  text-slate-500
  font-semibold
`;

const MailGuide = tw.div`
  mt-4
  text-center
  relative
`;
const MailGuideContent = tw.div`
  absolute
  top-12
  w-full
  text-pink-700
`;
const MailAddressContainer = tw.div`
  absolute
  w-full
  top-12
`;

const MailAddress = styled.div`
  margin-top: 5rem;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 80px,
    #fda4af 200px,
    rgba(255, 255, 255, 0) 320px
  );
  background-size: 400px 100%;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-left: 60px;
  margin-right: 60px;
`;

const MessageBox = tw.div`
    text-center
    font-pen
    text-xl
`;

const Join: NextPage = () => {
  return (
    <>
      <MobileView>
        <IntroduceMessage>
          메일을 보내주세요
          <br />
          여러분의 연락을 기다리고 있습니다.
        </IntroduceMessage>
        <MailGuide>
          <Image
            alt='message_box'
            src='/mailguide_box.png'
            width={400}
            height={200}
            objectFit='contain'
          />
          <MailGuideContent>
            이름. 나이. 키. 살고 계신 곳. 이상형.
            <br />
            본인 사진. 카카오톡 아이디.
            <br />
            간단한 자기소개
          </MailGuideContent>
          <MailAddressContainer>
            <MailAddress>yooja.ty@gmail.com</MailAddress>
          </MailAddressContainer>
        </MailGuide>
        <MessageBox className='mt-[50%] ml-10'>
          사랑을 이야기하면
          <br />
          사랑을 하게 된다.
          <br />
          <div className='font-brush mt-2'> W.G 베넘</div>
        </MessageBox>
        <MessageBox className='mt-[50%] pb-10'>
          우리는 오로지 사랑을 함으로써
          <br />
          사랑을 배울 수 있다.
          <br />
          <div className='font-brush mt-2'>아이리스 머독</div>
        </MessageBox>
      </MobileView>
      <PCView>
        <Header>
          <TopSmallTitle>준비할건 설레는 마음뿐.</TopSmallTitle>
          <TopTitle>참여방법은 간단합니다.</TopTitle>
          <TopSubtitle>
            메일을 보내주세요.
            <br />
            상시로 여러분들의 연락을 기다리고 있습니다.
            <br />
            이름 / 나이 / 키 / 살고 계신 곳 / 이상형 <br />
            본인 사진 / 카카오톡 아이디 / 자기소개를
            <br />
            아래 메일로 보내주세요!
            <br />
            <br />
            <span className='text-lg'>yooja.ty@gmail.com</span>
          </TopSubtitle>
        </Header>
        <MailInfoSection>
          <MailInfoItem>
            <LoveMessageContainer>
              <LoveMessage>
                사랑을 이야기하면 사랑을 하게 된다.
                <br />
                W.G. 베넘
              </LoveMessage>
            </LoveMessageContainer>
            <PhotoContainer>
              <PhotoItem>
                <Image
                  alt='남자'
                  src='/man.jpg'
                  width='300'
                  height='300'
                  objectFit='cover'
                />
              </PhotoItem>
              <PhotoItem>
                <Image
                  alt='여자'
                  src='/woman.jpg'
                  width='300'
                  height='200'
                  objectFit='cover'
                />
              </PhotoItem>
            </PhotoContainer>
          </MailInfoItem>

          <MailInfoItem>
            <MailInfoDescription>
              이름 / 나이 / 키 / 살고 계신 곳 / 이상형 <br />
              본인 사진 / 카카오톡 아이디 / 자기소개를
              <br />
              아래 메일로 보내주세요!
              <br />
              <br />
              <span className='text-lg'>yooja.ty@gmail.com</span>
            </MailInfoDescription>
          </MailInfoItem>
        </MailInfoSection>
      </PCView>
    </>
  );
};

export default Join;
