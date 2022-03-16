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
  text-shadow-xl
`;

const TopSmallTitle = tw.div`
text-red-100
  font-medium
  pb-1
`;
const TopTitle = tw.h1`
text-white
font-bold
  text-3xl
  break-words
`;
const TopSubtitle = tw.h2`
  pt-2
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
`;
const IntroduceSection = tw.section`
  pt-10
  pb-10
  px-3
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
const GijangIntroductionSection = tw.section`
  pt-10
  pb-10
  px-3
  shadow-2xl
  flex
  flex-col
  items-center
  justify-center
  space-y-10
  mt-20
`;
const GijangIntroduceItem = styled.div`
  @media (min-width: 1024px) {
    &:nth-child(2n + 1) {
      h2 {
        text-align: right;
      }
      p {
        text-align: right;
      }
      div:nth-child(2n + 1) {
        margin-left: -150px;
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
        margin-right: -150px;
      }
    }
  }
`;

const GijangIntroduceImageContainer = tw.div`
text-center
-z-50
span{
  drop-shadow-2xl
}
`;
const GijangIntroduceText = tw.div`
  mt-2
  sm:bg-orange-50
  p-5
  xl:p-5
  sm:mt-0
  drop-shadow-2xl
`;
const GijangIntroduceTitle = tw.h2`
  text-center
  font-bold
  text-xl
  pb-2
  `;
const GijangIntroduceDescription = tw.p`
  text-center
  text-sm
  font-normal
`;

const Service: NextPage = () => {
  return (
    <>
      <Header>
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
            <IntroduceTitle>어떻게 진행되나요?</IntroduceTitle>
            <IntroduceDescription>
              <p>
                - 신청자를 모집 후, 서로의 이상형에 맞게 선별하는 과정을 거치게
                됩니다.
              </p>
              <br />
              <p>
                - 진실된 참여자를 확인하기 위해 운영자와 대면(혹은 비대면)으로
                이야기를 나누게 됩니다.
              </p>
              <br />
              <p>- 참여자가 확정된 이 후, 일정과 숙소가 공지 됩니다.</p>
              <br />
              <p>
                - 총 2박 3일간의 일정으로 첫날 1시부터 셋째날 11시까지 일정이
                진행됩니다.
              </p>
              <br />
              <p>- 단체 일정과 커플 일정이 따로 주어지게 됩니다.</p>
              <br />
              <p className='text-center text-red-300'>
                좀 설레도 됩니다. 곧 만날거니까.
              </p>
            </IntroduceDescription>
          </IntroduceText>
        </IntroduceItem>
      </IntroduceSection>

      <GijangIntroductionSection>
        <div className=''>
          <h3 className='text-3xl font-bold'>
            즐길거리가 많은 기장, 데이트 장소 걱정 따로 안하셔도 됩니다.
          </h3>
        </div>
        <GijangIntroduceItem className='w-full max-w-7xl items-center odd:flex-row-reverse lg:flex lg:space-x-10'>
          <GijangIntroduceImageContainer>
            <Image
              src='/yeonhwari.jpeg'
              alt='연화리'
              width={700}
              height={450}
              objectFit='contain'
            />
          </GijangIntroduceImageContainer>
          <GijangIntroduceText>
            <GijangIntroduceTitle>연화리</GijangIntroduceTitle>
            <GijangIntroduceDescription>
              싱싱하고 아주 맛있는 해산물로 유명한 해녀촌입니다.
              <br />
              해산물뿐만 아니라 전복죽도 유명한 곳입니다.
              <br />
              연화리 바다 경치와 바다 소리와 함께
              <br />
              신선하고 탱글탱글하고 오독오독한 해산물을 즐길 수 있습니다.
              <br />
              걷기도 좋은 산책 코스도 있으니 데이트 장소로도 손색이 없습니다.
            </GijangIntroduceDescription>
          </GijangIntroduceText>
        </GijangIntroduceItem>
        <GijangIntroduceItem className='w-full max-w-7xl items-center odd:flex-row-reverse lg:flex lg:space-x-10'>
          <GijangIntroduceImageContainer>
            <Image
              src='/lotteworld.jpeg'
              alt='롯데월드'
              width={700}
              height={450}
              objectFit='contain'
            />
          </GijangIntroduceImageContainer>
          <GijangIntroduceText>
            <GijangIntroduceTitle>롯데월드 어드벤처 부산</GijangIntroduceTitle>
            <GijangIntroduceDescription>
              동부산 오시리아 관광단지 내 핵심 관광지인 롯데월드 어드벤처
              부산입니다.
              <br />
              파크 부제의 매직 포레스트라는 이름에 걸맞게
              <br />
              동물과 농장이 연상되는 디자인 테마구역들이 조성되어 있고,
              <br />
              이에 맞추어 어트랙션들도 동물과 농장을 주제로 설계된 모습을 확인할
              수 있습니다.
              <br />
              국내 최초로 도입되는 롤러코스터 2종을 비롯한 17종의 탑승 시설과
              관람시설을 먼저 손보이며
              <br />
              이후 순차적으로 시설을 늘려갈 예정입니다.
              <br />그 밖에 차별화된 공연과 퍼레이드로 풍성한 볼거리를 제공할
              예정입니다.
            </GijangIntroduceDescription>
          </GijangIntroduceText>
        </GijangIntroduceItem>
        <GijangIntroduceItem className='w-full max-w-7xl items-center odd:flex-row-reverse lg:flex lg:space-x-10'>
          <GijangIntroduceImageContainer>
            <Image
              src='/ikea.jpeg'
              alt='이케아'
              width={700}
              height={450}
              objectFit='contain'
            />
          </GijangIntroduceImageContainer>
          <GijangIntroduceText>
            <GijangIntroduceTitle>이케아</GijangIntroduceTitle>
            <GijangIntroduceDescription>
              스웨덴의 가구 및 생활 소품을 판매하는 다국적 기업으로 오시리아
              관광단지에 위치하고 있습니다.
              <br />
              주방, 거실, 아이 방, 침실 등의 쇼룸을 보는 재미가 있는 곳입니다.
              <br />
              잘 꾸며 놓았기 때문에 인테리어 시 참고할 수도 있습니다.
              <br />
              이케아 내 식사도 가능하기 때문에 구경하는 재미와 먹는 재미 둘 다
              잡을 수 있는 곳입니다.
            </GijangIntroduceDescription>
          </GijangIntroduceText>
        </GijangIntroduceItem>
        <GijangIntroduceItem className='w-full max-w-7xl items-center odd:flex-row-reverse lg:flex lg:space-x-10'>
          <GijangIntroduceImageContainer>
            <Image
              src='/oulet.jpeg'
              alt='동부산 아울렛'
              width={700}
              height={450}
              objectFit='contain'
            />
          </GijangIntroduceImageContainer>
          <GijangIntroduceText>
            <GijangIntroduceTitle>동부산 아울렛</GijangIntroduceTitle>
            <GijangIntroduceDescription>
              그리스 산토리니에 온 것만 같은 기분을 느끼며 쇼핑해 볼 수 있는
              곳입니다.
              <br />
              입구부터 커다란 기둥들이 고대 그리스 신전에 들어가는 느낌이 들도록
              합니다.
              <br />
              옥상 3층은 부산 야경촬영 명소로 유명한 곳으로 기분을 전환하기에는
              제격이죠.
              <br />
            </GijangIntroduceDescription>
          </GijangIntroduceText>
        </GijangIntroduceItem>
        <GijangIntroduceItem className='w-full max-w-7xl items-center odd:flex-row-reverse lg:flex lg:space-x-10'>
          <GijangIntroduceImageContainer>
            <Image
              src='/songjeong.jpeg'
              alt='송정'
              width={700}
              height={450}
              objectFit='contain'
            />
          </GijangIntroduceImageContainer>
          <GijangIntroduceText>
            <GijangIntroduceTitle>송정해수욕장</GijangIntroduceTitle>
            <GijangIntroduceDescription>
              전국구급인 해운대 해수욕장과 광안리 해수욕장과 더불어 동부산을
              대표하는 해수욕장으로
              <br />
              해운대, 광안리, 송도, 다대포를 이은 부산 제5의 해수욕장입니다.
              <br />
              해운대와 더불어 1월 1일 새해에는 많은 사람들이 해돋이를 보러 송정
              해수욕장으로 옵니다.
              <br />
              한국에서 최초로 서핑이 시작된 곳으로 대한민국 서핑의 메카이기도
              합니다.
            </GijangIntroduceDescription>
          </GijangIntroduceText>
        </GijangIntroduceItem>
        <GijangIntroduceItem className='w-full max-w-7xl items-center odd:flex-row-reverse lg:flex lg:space-x-10'>
          <GijangIntroduceImageContainer>
            <Image
              src='/yonggungsa.jpeg'
              alt='용궁사'
              width={700}
              height={450}
              objectFit='contain'
            />
          </GijangIntroduceImageContainer>
          <GijangIntroduceText>
            <GijangIntroduceTitle>용궁사</GijangIntroduceTitle>
            <GijangIntroduceDescription>
              부산 기장의 시랑리 해안에 위치한 해동용궁사는
              <br />
              바닷가에서 용을 타고 승천하는 관세음보살을 꿈에 보았다는
              이야기에서 이름이 유래되었습니다.
              <br />
              산과 바다가 맞닿은 육지의 끝자락에 해동용궁사가 한 폭의 그림처럼
              걸려있습니다.
              <br />
              바닷가에 있는 절로 우리나라에서 가장 아름다운 절로 꼽힙니다.
              <br />
              건물도 없어 탁 트인 바다를 느낄 수 있으며 불교 신자가 아니더라도
              관광지로도 손색이 없습니다.
              <br />
            </GijangIntroduceDescription>
          </GijangIntroduceText>
        </GijangIntroduceItem>
      </GijangIntroductionSection>
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
