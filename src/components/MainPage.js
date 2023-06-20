import React from 'react'
import { FlexComponent, MainImage } from '../style/styled-components'

const MainPage = () => {
    return (
        <FlexComponent>
            <MainImage
                src='https://static.wanted.co.kr/images/wantedplus_event/preonboarding/infopage/intro.png'
                loading='lazy'
            />
        </FlexComponent>
    )
}

export default MainPage