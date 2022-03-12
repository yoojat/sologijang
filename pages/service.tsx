import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import PortfolioItem from '@components/PortfolioItem';

const Header = tw.div`
  pt-80
  px-10
  pb-80
  bg-[url('/sea.jpg')]
  bg-cover
  text-center
`;

const TopSmallTitle = tw.div`
text-red-100
  font-medium
  pb-2
`;
const TopTitle = tw.h1`
text-white
font-bold
  text-3xl
  break-words
`;
const TopSubtitle = tw.h2`
  pt-4
  text-white
  font-medium
  text-md
  pb-3
`;

const ButotnContainer = tw.div``;
const ContactBtn = tw.button`
border
border-white
text-white
  w-full
  rounded-md
  py-3
  mb-10
  font-light
  cursor-pointer
hover:border-[#FF5061]
hover:text-[#FF5061]
hover:font-bold
max-w-sm
  transition-all
  duration-300
  active:bg-emerald-900
`;
const IntroduceSection = tw.section`
  pt-10
  pb-10
  px-3
  shadow-2xl
  items-center
  justify-center
  space-y-10
  bg-orange-50
`;

const IntroduceItem = tw.div`
text-center`;
const IntroduceImageContainer = tw.div`
text-center
`;
const IntroduceText = tw.div`
  sm:bg-white
  p-5
  xl:p-5
  mx-auto
`;
const IntroduceTitle = tw.h2`
  text-left
  font-normal
  text-xl
  pb-5
  text-slate-400
  border-b-2
  mb-5

  `;
const IntroduceDescription = tw.p`
  text-left
  text-sm
  font-normal
  text-slate-500
`;

const MessageBox = tw.div`
bg-[#9dc0cf]
pt-8
pb-4
font-medium
text-white
`;
const MessageTitle = tw.h4`
  text-center
  text-2xl
`;

const Service: NextPage = () => {
  return (
    <>
      <Header>
        <TopSmallTitle>솔로 기장</TopSmallTitle>
        <TopTitle>2박 3일간 인연을 찾는 시간</TopTitle>
        <TopSubtitle>
          준비가 되어있으신가요?
          <br />
          여러분의 인연도 준비되어있습니다.
        </TopSubtitle>
        <ButotnContainer>
          <Link href='/join'>
            <a>
              <ContactBtn>신청하기</ContactBtn>
            </a>
          </Link>
        </ButotnContainer>
      </Header>
      <IntroduceSection>
        <IntroduceItem className='bg-r mx-auto w-full max-w-2xl drop-shadow-md'>
          <IntroduceText>
            <IntroduceTitle>솔로 기장?</IntroduceTitle>
            <IntroduceDescription>
              <p>
                솔로 기장은 “나는 솔로”라는 프로그램을 보고 기획되었습니다.
                방송은 되지 않습니다. 여러분의 인연을 만드는 데 집중하겠습니다.
              </p>
              <br />
              <p>
                기장은 부산의 교외로, 기장의 바다는 고요하고 아늑한 느낌마저
                줍니다. 바다를 따라 걷다 보면 어느새 마음이 정리되고 편안해지는
                것을 느낄 수 있죠. 이런 기장은 인연을 만나는데 좋은 장소입니다.
                인연의 시작이라는 선물이 여기에 있습니다. 이제 2박 3일간,
                아름다운 기장에서의 여정이 여러분을 기다리고 있습니다.
              </p>
              <br />
              <p>
                2박 3일 동안 기장의 아름다운 바다와 함께 여러명의 남녀들이
                시간을 보내게 됩니다. 저희는 서로의 마음을 확인할 기회를
                계속해서 만들어 드릴 겁니다. 인생의 짝을 찾을 준비가 되었다면
                마음을 열고 진정한 자신을 보여주세요.
              </p>
              <br />
              <p>
                인원은 신청해주신 내용을 최대한 검토하고, 연락을 드릴겁니다.
                대면(여의치 않을 경우 비대면)으로 이야기를 나눈 후 신청자들을
                선별해서 일정과 장소를 공지해드릴겁니다. 그렇기 때문에 신청서는
                진심을 가득 담아서 써주세요!
              </p>
              <br />
              <p>
                기대하셔도 좋습니다. 잊지 못할 추억을 가지고 가세요. 서로의
                인연을 찾는 시간이기도 하지만 자기 자신을 알아가는 시간이기도
                합니다.
              </p>
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
        <ButotnContainer className='text-center'>
          <Link href='join'>
            <a>
              <ContactBtn
                className='mx-auto
border-slate-400 px-20 text-slate-400'
              >
                신청하기
              </ContactBtn>
            </a>
          </Link>
        </ButotnContainer>

        <IntroduceItem className='bg-r mx-auto w-full max-w-2xl items-center drop-shadow-md'>
          <IntroduceText>
            <IntroduceTitle>야심차게 준비했습니다.</IntroduceTitle>
            <IntroduceDescription>
              <p>
                자난 1여년간 고민과 기획을 수없이 한 끝에 이렇게 “솔로 기장”을
                공개하게 되었습니다.
              </p>
              <br />
              <p>
                참여하신 여러분들 한분 한분 서로 이어주는데 최선을 다하겠습니다.
                “진심”으로 지원해주신 분들께 서로의 인연을 만날 수 있도록
                “진심”으로 도와드리겠습니다.
              </p>
              <br />
              <p>망설이지 말고 지원해주세요.</p>
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
        <IntroduceItem className='bg-r mx-auto w-full max-w-2xl items-center drop-shadow-md'>
          <IntroduceText>
            <IntroduceTitle>일정과 비용</IntroduceTitle>
            <IntroduceDescription>
              <p>
                총 2박 3일간의 일정으로 첫날 1시부터 셋째날 11시까지 일정이
                진행됩니다.
              </p>
              <br />
              <p>
                비용은 1인당 30만원 입니다. 단체 식비, 숙박 비용, 기타 준비
                비용에 필요한 금액입니다. 개인 데이트 비용은 포함되어있지
                않습니다.
              </p>
              <br />
              <p>망설이지 말고 지원해주세요.</p>
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
      </IntroduceSection>
      <MessageBox>
        <MessageTitle>
          <p>
            사랑 받고 싶다면 사랑하라,
            <br />
            그리고 사랑스럽게 행동하라.
          </p>
          <p>- 벤자민 프랭클린 -</p>
        </MessageTitle>
        <ButotnContainer className='mt-5 text-center'>
          <Link href='join'>
            <a>
              <ContactBtn className='px-20'>신청하기</ContactBtn>
            </a>
          </Link>
        </ButotnContainer>
      </MessageBox>
    </>
  );
};

export default Service;
