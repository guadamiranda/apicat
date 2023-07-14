'use client';

import LeftSide from '@/Components/Molecule/LeftSide/LeftSide'
import RightSide from '@/Components/Molecule/RightSide/RightSide'
import style from './home.module.scss'
import { useEffect, useState } from 'react'

const HomePage = () => {
    const [michiPicture, setMichiPicture] = useState()

    const axios = require('axios');

    async function getMichiAPI() {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            setMichiPicture(response.data[0].url)
        } catch (error) {
            console.error(error);
        }      
    }

    useEffect(() => {
        getMichiAPI()
    },[])

    return(
        <div className={style.homePageContainer}>
            <div className={style.homePageContainer__leftSide}>
                <LeftSide setMichiPhotoFunction={getMichiAPI}/>
            </div>
            <div className={style.homePageContainer__rightSide}>
                <RightSide michiPhoto={michiPicture}/>
            </div>
        </div>
    )
}

export default HomePage