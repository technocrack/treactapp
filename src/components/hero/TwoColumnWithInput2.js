import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";


import { ReactComponent as SvgDecoratorBlob1 } from "images/hero-corners/hero-lt.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/hero-corners/hero-lb.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/hero-corners/hero-rt.svg";
import { ReactComponent as SvgDecoratorBlob4 } from "images/hero-corners/hero-rb.svg";

import Header from "../headers/light.js";

//import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
//import DesignIllustration from "../../images/design-illustration-2.svg";
import DesignIllustration from "../../images/front_illustration.svg";

// const Container = styled.div`
//   ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
//   background-image: url("https://drive.google.com/uc?export=download&id=1xCyuQrzyCezslK3SXW3NgL28_OWb-0GC");
// `;

const Container = tw.div`relative h-screen`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24 `;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;


const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-50 absolute left-0 top-0 h-64 w-64 transform -translate-x-2/3 -z-10 text-pink-400`}
`;

const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64  transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;

const DecoratorBlob3 = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;
const DecoratorBlob4 = styled(SvgDecoratorBlob4)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;

const Plan = styled.div`
  ${tw`w-full max-w-72 mt-16 md:mr-12 md:last:mr-0 text-center px-8 rounded-lg relative text-gray-900 bg-white flex flex-col shadow-raised`}

  ${props =>
    props.featured &&
    css`
      ${tw`border-2 border-gray-200 shadow-none`}
    `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-gray-100 rounded-t-lg lg:justify-end items-center`}
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .slash {
    ${tw`text-xl text-gray-500`}
  }
  .duration {
    ${tw`lowercase text-gray-500 font-medium tracking-widest`}
  }
  .mainFeature {
    ${tw`text-gray-500 text-sm font-medium tracking-wide`}
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 flex-1 text-sm`}
  .feature {
    ${tw`mt-5 first:mt-0 font-semibold text-gray-500`}
  }
`;

const PlanAction = tw.div`px-4 pb-8`;


const Image = tw.img`w-20 h-20 rounded-full`;

export default ({ roundedHeaderButton,  plans = null, }) => {
  const defaultPlans = [
    {
      name: "Praful Manual",
      imgsrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      durationPrices: ["$0", "$0"],
      mainFeature: "For Personal Blogs",
      features: ["9500 Score", "9000hrs Time Pages", "12 Internal Pages", "Basic Assistance"]
    }
  ];

  if (!plans) plans = defaultPlans;

  return (
    <>
      <Container>
      <Header />
        <TwoColumn>
          <LeftColumn>
          <PlansContainer>
          {plans.map((plan, index) => (
            <Plan key={index} featured={plan.featured}>
              <PlanHeader>
                <Image src={plan.imgsrc} />  
                <span className="priceAndDuration">
                  <span className="price">23</span>
                </span>
                <span className="name">{plan.name}</span>
                <span className="mainFeature">Monthly</span>
              </PlanHeader>
              <PlanFeatures>
                {plan.features.map((feature, index) => (
                  <span key={index} className="feature">
                    {feature}
                  </span>
                ))}
              </PlanFeatures>
            </Plan>
          ))}
        </PlansContainer>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl"  src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
        <DecoratorBlob3 />
        <DecoratorBlob4 />
      </Container>
    </>
  );
};
