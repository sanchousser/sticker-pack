// import stickers from './../stickers'
import { AppBar } from './AppBar/AppBar';
import Clock from './Clock/Clock';
// import { StickerList } from './StickerList/StickerList';



export const App = () => {
  return (
    // <StickerList stickers={stickers} />
    <>
      <AppBar />
      <Clock />
    </>

  )
};
