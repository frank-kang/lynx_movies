import "./App.css";
import { GameCategory } from "./components/GameCategory.tsx";

export function App() {
  return (
    <scroll-view className="scroll-container" scroll-orientation="vertical">
      <view className="scroll-content">
        <GameCategory />
        <GameCategory />
        <GameCategory />
        <GameCategory />
      </view>
    </scroll-view>
  )
}
