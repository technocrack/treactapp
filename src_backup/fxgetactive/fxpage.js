import React from "react";
import tw from "twin.macro";
import Hero from "components/hero/TwoColumnWithVideo.js";
import TabGrid from "components/cards/TabCardGrid.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

export default () => {
    const HighlightedText = tw.span`bg-primary-100 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const imageCss = tw`rounded-4xl`;
    return (
        <div>
            <AnimationRevealPage>
                <Hero
                    heading={<>FX & GetActive <HighlightedText>Wellness anywhere</HighlightedText></>}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                    primaryButtonText="Order Now"
                    watchVideoButtonText="Meet The Chefs"
                />
                <TabGrid
                    heading={
                        <>
                            Check out <HighlightedText>worlouts.</HighlightedText>
                        </>
                    }
                />
            </AnimationRevealPage>
        </div>
    );
}