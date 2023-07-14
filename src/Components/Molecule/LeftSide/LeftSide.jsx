import Button from '@/Components/Atom/Button/Button'
import style from './leftSide.module.scss'
import {PiTelevisionSimpleFill} from 'react-icons/pi'
import { AiFillCloud } from 'react-icons/ai'

const LeftSide = ({setMichiPhotoFunction}) => {
    return(
        <div className={style.leftSideComponent}>
            <div className={style.leftSideComponent__logo}>
                <PiTelevisionSimpleFill/><span>MichiVision</span>
            </div>
            <div className={style.leftSideComponent__body}>
                <div className={style.leftSideComponent__textAndButton}>
                    <div className={style.leftSideComponent__text}>
                        <div><span className={style.leftSideComponent__italic}>Explora</span> una gran cantidad de imágenes de <span className={style.leftSideComponent__italic}>michis._</span></div>
                    </div>
                    <div>
                        <Button onClickFunction={setMichiPhotoFunction}/>
                    </div>
                </div>

                <div className={style.leftSideComponent__details}>
                    <div className={style.leftSideComponent__squarePink}>
                        <AiFillCloud/>
                    </div>
                    <div className={style.leftSideComponent__squareOrange}>
                        <AiFillCloud/>
                    </div>
                    <div className={style.leftSideComponent__squarePink}>
                        <AiFillCloud/>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default LeftSide