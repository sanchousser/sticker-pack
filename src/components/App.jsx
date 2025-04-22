import stickers from './../stickers'
import { StickerList } from './StickerList/StickerList';



export const App = () => {
  return (<StickerList stickers={stickers} />)
};
