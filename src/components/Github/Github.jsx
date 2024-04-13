import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}

            <img className="justify-center" src={data.avatar_url} alt="Git picture" width={300} />
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Name: {data.name}</div>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>About me : {data.bio}</div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/kiriotheo')
    return response.json()
}