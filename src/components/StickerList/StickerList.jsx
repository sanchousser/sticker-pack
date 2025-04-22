import css from './StickerList.module.css'

const { Sticker } = require("components/Sticker/Sticker")

export const StickerList = ({stickers}) => {
    return (
        <ul className={css.sticker__list}>
            {stickers.map(({img, label}, index) => (
                <Sticker key={index} img={img} label={label}/>
            ))}
        </ul>
    )
}