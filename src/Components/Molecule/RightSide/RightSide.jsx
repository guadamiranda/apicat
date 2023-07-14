import style from './rightSide.module.scss'

const RightSide = ({michiPhoto}) => {
    return(
        <div className={style.rightSideComponent}>
            <div className={style.rightSideComponent__imgContainer}>
               <img src={michiPhoto}></img> 
            </div>
        </div>
    )
}

export default RightSide