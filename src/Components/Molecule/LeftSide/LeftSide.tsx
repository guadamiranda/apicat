import Button from '@/Components/Atom/Button/Button'
import style from './leftSide.module.scss'
import {PiTelevisionSimpleFill} from 'react-icons/pi'

const LeftSide = ({setMichiPhotoFunction}) => {
    return(
        <div className={style.leftSideComponent}>
            <div className={style.leftSideComponent__logo}>
                <PiTelevisionSimpleFill/><span>MichiVision</span>
            </div>
            <div className={style.leftSideComponent__body}>
                <div className={style.leftSideComponent__text}>
                    <div><span className={style.leftSideComponent__italic}>Explora</span> una gran cantidad de imágenes de <span className={style.leftSideComponent__italic}>michis._</span></div>
                </div>
                <div>
                    <Button onClickFunction={setMichiPhotoFunction}/>
                </div>
                
            </div>
            
        </div>
    )
}

export default LeftSide