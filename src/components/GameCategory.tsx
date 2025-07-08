import { GameCard } from "./GameCard.tsx";

export const GameCategory = () => {
    return (
        <view className="category">
            <text className="heading">Most Anticipated</text>
           <list
                scroll-orientation="horizontal"
                list-type="single"
                span-count={1}
                className="horizontal-list"
            >
                {
                    Array.from({ length: 50 }).map((item, index) => {
                        return (
                            <list-item
                                item-key={`list-tem-${index}`}
                                key={`list-item-${index}`}
                            >
                                <GameCard />
                            </list-item>
                        );
                    })
                }
            </list>

        </view>
    );
}