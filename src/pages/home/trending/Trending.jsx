import { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/contentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
SwitchTabs

ContentWrapper

import useFetch from '../../../components/hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
Carousel

const Trending = () => {
    const [endPoint, setEndPoint] = useState("day");

    const { data, loading } = useFetch(`/trending/all/${endPoint}`);

const onTabChange = (Tab) => {
    setEndPoint(Tab === "Day" ? "day" : "week");
}


    return <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">
                Trending
            </span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
}

export default Trending