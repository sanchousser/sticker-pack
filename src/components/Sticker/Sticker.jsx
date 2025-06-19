import { useState } from 'react'
import css from './Sticker.module.css'

// export const Sticker = ({img, label}) => {
//     return(

//     )
// }

export const Sticker = ({ img, label }) => {
    // state = {
    //     visible: false
    // }

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible((prevValue) => !prevValue)
    }


        return (
            <li onClick={handleClick} className={css.sticker} >
                <img src={img} alt={label} />
                {visible && <p>{label}</p>}
            </li>
        )
}