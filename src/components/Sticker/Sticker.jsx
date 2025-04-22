import { Component } from 'react'
import css from './Sticker.module.css'

// export const Sticker = ({img, label}) => {
//     return(

//     )
// }

export class Sticker extends Component {
    state = {
        visible: false
    }

    handleClick = () => {
        this.setState({ visible: true })
    }

    render() {
        const { img, label } = this.props;
        return (
            <li onClick={this.handleClick} className={css.sticker} >
                <img src={img} alt={label} />
                {this.state.visible && <p>{label}</p>}
            </li>
        )
    }
}