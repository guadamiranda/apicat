'use client';
import style from './button.module.scss'
import { BsMagic } from 'react-icons/bs'

const Button = ({onClickFunction}) => {
    return(
        <div className={style.buttonContainer} onClick={() => {onClickFunction()}}>
            <BsMagic></BsMagic><span><b>Buscar Michi</b></span>
        </div>
    )
}

export default Button