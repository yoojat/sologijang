import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import PortfolioItem from '@components/PortfolioItem';

const Header = tw.div`
  pt-28
  px-10
  pb-20
  bg-white
  text-center
`;

const TopSmallTitle = tw.div`
text-red-300
  font-medium
  pb-4
`;
const TopTitle = tw.h1`
text-[#FF3E53]
  text-3xl
  break-words
`;
const TopSubtitle = tw.h2`
  pt-4
  text-red-300
  font-medium
  text-lg
  pb-7
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

const Join: NextPage = () => {
  return (
    <>
      <Header>
        <TopSmallTitle>준비할건 설레이는 마음 뿐.</TopSmallTitle>
        <TopTitle>참여방법은 간단합니다.</TopTitle>
        <TopSubtitle>
          메일을 보내주세요.
          <br />
          상시로 여러분들의 연락을 기다리고 있습니다.
          <br />
          이름 / 나이 / 살고 계신 곳 / 이상형 <br />
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
            <PhotoItem className='mt-20'>
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
            이름 / 나이 / 살고 계신 곳 / 이상형 <br />
            본인 사진 / 카카오톡 아이디 / 자기소개를
            <br />
            아래 메일로 보내주세요!
            <br />
            <br />
            <span className='text-lg'>yooja.ty@gmail.com</span>
          </MailInfoDescription>
        </MailInfoItem>
      </MailInfoSection>
    </>
  );
};

export default Join;
