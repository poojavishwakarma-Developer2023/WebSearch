import React from 'react'

// import '../App.css';

const ShowSearch=(props) =>{
    const {results,info}=props
    // const [{term}]=useStateVAlue();

    return (
        <div >
            <p>this para </p>
            <div className='toResults'>{info ? `total matched results  :${info.totalResults}`:' '}</div>
            <div>
                {results.length > 0? results.map(results => (
                    <div>
                        <div className=' api_data_links'>{results.displayLink}</div>
                        <div className='api_data_tilte_link'> <a  style={{textAlign:'right'}} href={results.link}>{results.title}</a></div>
                        <div>
                        <p>{results.snippet}</p> 
                         {/* <div>{results.link}</div> */}
                        </div> 
                    </div>
                ))
          :' '}
            </div>
        </div>
    )
}

export default ShowSearch;
