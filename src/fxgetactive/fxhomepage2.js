import React from "react";
import tw from "twin.macro";
import Hero from "components/hero/TwoColumnWithInput2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

export default () => {
    const HighlightedText = tw.span`bg-secondary-100 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    return (
        <div>
            <AnimationRevealPage>
                <Hero />
                <TabGrid
                    heading={
                        <>
                            Check out <HighlightedText>worlouts.</HighlightedText>
                        </>
                    }
                />
                <Footer />
            </AnimationRevealPage>
        </div>
    );
}