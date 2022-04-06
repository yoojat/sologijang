import Image from 'next/image';
import tw from 'tailwind-styled-components';

const BodyItemWrapper = tw.div`
  max-w-screen-lg
  mx-auto
  flex
  flex-row
  justify-center
  items-center
  w-full
  odd:flex-row-reverse
`;
const DescriptionImage = tw.div`
  w-6/12
  h-96
  lg:h-64
  lg:max-w-md
  relative
`;
const DescriptionBox = tw.div`
  lg:max-w-md
  mt-10
  lg:mt-0
  w-6/12
  px-5
`;
const TitleDescription = tw.h2`
  text-[#FD4155]
  text-2xl
  mb-3
`;
const SubTitleDescription = tw.div`
text-rose-500
  mb-5
`;
const SmallDescription = tw.div`
  text-sm
  pb-28
  border-b-2
  border-rose-200
  text-rose-400
`;
const SmallDescriptionTitle = tw.div``;
const SmallSubDescriptionContent = tw.div`
`;

interface IProps {
  imageSrc: string;
  imageAlt: string;
  titleDescription: string;
  subtitleDescription: string;
  smallDescriptionTitle: string;
  smallSubDescriptionContents: string[];
}

export default function BodyItem({
  imageSrc,
  imageAlt,
  titleDescription,
  subtitleDescription,
  smallDescriptionTitle,
  smallSubDescriptionContents,
}: IProps) {
  return (
    <BodyItemWrapper>
      <DescriptionImage>
        <Image
          src={imageSrc}
          alt={imageAlt}
          // width={800}
          // height={500}
          layout='fill'
          objectFit='cover'
        />
      </DescriptionImage>

      <DescriptionBox>
        <TitleDescription
          dangerouslySetInnerHTML={{ __html: titleDescription }}
        ></TitleDescription>
        <SubTitleDescription>{subtitleDescription}</SubTitleDescription>
        <SmallDescription>
          <SmallDescriptionTitle>{smallDescriptionTitle}</SmallDescriptionTitle>
          <SmallSubDescriptionContent>
            {smallSubDescriptionContents.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </SmallSubDescriptionContent>
        </SmallDescription>
      </DescriptionBox>
    </BodyItemWrapper>
  );
}
