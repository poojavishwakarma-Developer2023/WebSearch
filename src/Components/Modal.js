import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FiSearch } from "react-icons/fi";
import { ImCross } from "react-icons/im";
// import SearchApp from './Component/SearchApp';
// import ShowResults from './Component/ShowResults';

import Typewriter from "typewriter-effect";
import '../../src/CSS/Modal.css'
import '../../src/CSS/Style.css'
import '../../src/App.css'
import '../../src/index.css'

import ShowSearch from './ShowSearch';

const SearchModal = (props) => {
    const [inputData, setInputData] = useState('')
    const [results, setResults] = useState([])
    const [info, setInfo] = useState('')
    //     useEffect(()=>{
    //   const apiFun=()=>{
    //     alert('this is alert for search')
    //   }
    //   apiFun();
    // },
    // [])

    const apiFunction = async (e) => {
        try {
            const ApiUrl = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBc4rur8sS85DZdhiI5L2wt6a07wuldStQ&cx=017576662512468239146:omuauf_lfve&q=${inputData}`
            const response = await axios.get(ApiUrl);

            if (!response?.data?.error) {
                // console.log(' SuccessResponse', JSON.stringify(response));
                console.log('respose with items', response?.data?.items)
                console.log('respose with searchInformation', response?.data?.searchInformation)
                setResults(response?.data?.items)
                setInfo(response?.data?.searchInformation)
                //   return response;
      
            }
        }
        catch (error) {
            console.log('error', error)
        }
           
    }


    return (
        <>

            <span class='m_container'>
                <div class='modal_head'>
                    <p>Search Area</p>
                    <span class='cencel_icon'>
                        <ImCross size={12} color='gray' onClick={() => { props.searchModal(false) }} />
                    </span>
                </div>

                <h5 className='type_writer'>
                    <Typewriter 
                     options={{
                        strings:
                            ['Search for google lectures','Click seach icon for search ', 'Search like node js  ', ],
                        autoStart: true,
                        loop: true
                    }} />
                </h5>
                <div className=' container search-box'>
                    <input
                        value={inputData}
                        onChange={(e) => { setInputData(e.target.value) }}
                        className='search_input'
                        placeholder='search here'
                    />
                    <FiSearch size={25} className='icon' onClick={apiFunction} />
                    {/* <input type='submit' className='search_btn py-1 px-3 ' onClick={apiFunction} value='Serach' />  */}
                </div>
                <div className='search_result'>this is nklnk
                    {/* <div> */}
                    {/* <h1>heading</h1> */}
                    <div className='toResults'>{info ? `total matched results  :${info.totalResults}` : ' '}</div>
                    <div>
                        {results.length > 0 ? results.map(results => (
                            <div>
                                <div className=' api_data_links'>{results.displayLink}</div>
                                <div className='api_data_tilte_link'> <a style={{ textAlign: 'right' }} href={results.link}>{results.title}</a></div>
                                <div>
                                    <p>{results.snippet}</p>
                                    {/* <div>{results.link}</div> */}
                                </div>
                            </div>
                        ))
                            : ' '}
                        {/* </div> */}
                        {/* <ShowSearch results={results} info={info}/> */}
                    </div>
                </div>

            </span>

        </>

    )
}

export default SearchModal
