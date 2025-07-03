// import stickers from './../stickers'
import { AppBar } from './AppBar/AppBar';
import Counter  from './Counter/Counter';
import SignUpForm from './SignUpForm/SignUpForm';
// import Clock from './Clock/Clock';
// import { StickerList } from './StickerList/StickerList';



export const App = () => {
  return (
    // <StickerList stickers={stickers} />
    <>
      <AppBar />
      < SignUpForm />
      <Counter />
      {/* <Clock /> */}
    </>

  )
};
