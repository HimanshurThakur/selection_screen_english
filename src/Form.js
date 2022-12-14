import React, { useState } from 'react'

import "./Css/formdesign.css"
import PdfPage from './PdfPage'

export default function Form() {


    const [apidata, setapidata] = useState([])


    const [data, setdata] = useState({
        organizationCode: " ",
        year: " ",
        seasion: " ",
        filepath: ''
    })

    function getData(e) {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })
    }

    async function postData(e) {
        e.preventDefault()
        const { organizationCode, year } = data


        const rawdata = await fetch(`https://jsonplaceholder.typicode.com/users?id=${1}`)
        const result = await rawdata.json()
        setapidata(result)
        console.log(result)

    }
    return (
        <>
            <div className='center'>
                <h1>FARMER DETAILS</h1>
            </div>

            <div className='responsive'><div className='display_flex'>
                <form>
                    <span>OrganizationCode</span>
                    <input onChange={getData} type='text' name='organizationCode' />
                    <span>Year</span>
                    <select onChange={getData} name='year' >
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                    </select>
                    <span>Seasion</span>
                    <input onChange={getData} type='text' name='seasion' />

                    <span>File Path</span>
                    <input onChange={getData} type='file' name='filepath' />
                    <div>
                        <span> <button onClick={postData}>Get Data</button></span>
                    </div>
                </form>
            </div>
            </div>


            {


                apidata.map((item, index) => {
                    return <PdfPage

                        key={index}
                        id={item.id}
                        name={item.name}
                        username={item.username}
                        email={item.email}
                    />
                })
            }

        </>
    )
}
