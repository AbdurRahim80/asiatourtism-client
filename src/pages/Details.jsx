import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const spotData = useLoaderData();
    console.log("spotData details ", spotData);
    const id = useParams();
    console.log(id.id);
    // const spotDetail = spotData?.find(sptDetail => sptDetail.)
    const parseId = parseInt(id.id)
    console.log(typeof parseId);
    // const detailSpotData = spotData?.find(spotDetail => spotDetail._id === parseId)

    // console.log("spotData", spotData);

    const spotDetail = spotData?.find(spotDet => spotDet?._id === parseId)
    console.log("spotDetailsss", spotDetail);

    // const spotDetail = spotData.map(spotDet => console.log(spotDet._id))
    // console.log("spotDetailsss", spotDetail);
    return (
        <div className='min-h-[calc(100vh-353.077px)]'>
            {/* <p>Id: {spotDetail._id}</p> */}
            {
                spotData.map(spotDet => (
                    <div key={spotDet?._id}>{spotDet?._id}</div>
                ))
            }
        </div>
    );
};

export default Details;