import Image from 'next/image';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import { logo, title } from '@libs/options';
import styled from 'styled-components';
import { useEffect, useLayoutEffect, useState } from 'react';

const TopBarWrapper = styled.div<{ scrollTop: number }>`
  ${(p) => (p.scrollTop > 0 ? 'background-color: #fda4af;' : '')}
  transition:all 0.1s;
  position: fixed;
  @media (min-width: 768px) {
    height: 7rem /* 112px */;
  }
  @media (min-width: 1024px) {
    padding-left: 6rem /* 96px */;
    padding-right: 6rem /* 96px */;
  }

  display: flex;
  height: 7rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
`;

const MenuBarContainer = tw.div`
  block
  z-50
  lg:hidden
`;

const TopLogoContainer = tw.div`
  flex
  justify-center
  items-center
`;

const ImageContainer = tw.div`
  w-36
  h-20
  relative
  mt-2
`;

const MenuContainer = tw.div<{ $isSideMenuShow: boolean }>`
  fixed
  w-4/5
  max-w-[18.75em]
  h-screen
  ${(props) => (props.$isSideMenuShow ? 'right-0' : '-right-full')}
  transition-all
  lg:transition-none
  duration-500
  ease-menu-in-out
  top-0
  lg:h-auto
  lg:right-auto
  lg:top-auto
  lg:w-auto
  lg:flex
  lg:relative
  lg:space-x-7
  text-lg
  bg-[#fda4af]
  z-50
  px-8
  pt-5
  lg:px-0
  lg:pt-5
  lg:bg-transparent
`;

const MenuBarIcon = tw.svg<{ $isSideMenuShow: boolean }>`
${(props) => (props.$isSideMenuShow ? 'first:hidden' : 'last:hidden')}
w-7
h-7
cursor-pointer
animate-wiggle
`;

const TopMenuItem = tw.div`
  text-base
  font-medium
  pb-5
  text-white

`;

const DarkCover = tw.div<{ $isSideMenuShow: boolean }>`
${(props) => (props.$isSideMenuShow ? 'bg-gray-900/80' : '')}
${(props) => (props.$isSideMenuShow ? 'visible' : 'invisible')}
transition-all
duration-500
w-full
h-full
fixed
-z-10
`;

const SideBarLogoContainer = tw.div`
lg:hidden
border-b
border-b-slate-200
mb-5
`;

interface MenuItem {
  name: string;
  path: string;
}

interface IProps {
  menuItems: { name: string; path: string; subMenu?: MenuItem[] }[];
  isSideMenuShow: boolean;
  setIsSideMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({
  menuItems,
  isSideMenuShow,
  setIsSideMenuShow,
}: IProps) {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const handleScroll = (e: Event) => {
    setScrollTop(document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TopBarWrapper scrollTop={scrollTop}>
        <TopLogoContainer>
          <Link href='/'>
            <a>
              <ImageContainer>
                <Image
                  src={logo}
                  alt={title}
                  // width={170}
                  // height={100}
                  layout='fill'
                  objectFit='contain'
                />
              </ImageContainer>
            </a>
          </Link>
          <Link href='/'>
            <a>
              <span className='pl-5 text-2xl font-medium text-white sm:text-3xl'>
                솔로기장
              </span>
            </a>
          </Link>
        </TopLogoContainer>
        <MenuContainer $isSideMenuShow={isSideMenuShow}>
          <SideBarLogoContainer>
            <Link href='/'>
              <a>
                <Image
                  src={logo}
                  alt={title}
                  width={150}
                  height={100}
                  objectFit='contain'
                />
              </a>
            </Link>
          </SideBarLogoContainer>
          {menuItems.map((menuItem, index) => (
            <Link href={menuItem.path} key={index}>
              <a>
                <TopMenuItem>{menuItem.name}</TopMenuItem>
              </a>
            </Link>
          ))}
        </MenuContainer>
        <MenuBarContainer onClick={() => setIsSideMenuShow((prev) => !prev)}>
          <MenuBarIcon
            $isSideMenuShow={isSideMenuShow}
            xmlns='http://www.w3.org/2000/svg'
            fill='white'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </MenuBarIcon>

          <MenuBarIcon
            $isSideMenuShow={isSideMenuShow}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='white'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </MenuBarIcon>
        </MenuBarContainer>
      </TopBarWrapper>
      <DarkCover
        onClick={() => setIsSideMenuShow(false)}
        $isSideMenuShow={isSideMenuShow}
      />
    </>
  );
}
