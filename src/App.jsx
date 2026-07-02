import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index,setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`);
    setUserData(response.data);
    console.log(response.data)
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    font-semibold'>
    Loading...
    </h3>
  if (userData.length > 0) {
    printUserData = userData.map(
      function (ele,idx) {
        return (
          <div key={idx}>
            
            <Card ele={ele}/>
          </div>
        )
        
      }
    )
  }
  return (

    <div className='bg-black h-screen p-4 text-white overflow-auto'>
      {/* <button onClick={getData} className='bg-green-500 mb-3 px-4 py-2 rounded text-white active:scale-95 cursor-pointer'>Get Data</button> */}

      

      <div className=' flex  flex-wrap gap-4 justify-center '>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-4 '>
        <button 
        onClick={()=>{
            if(index>1){
              setIndex(index-1)
              printUserData='Loading...'
              setUserData([])
            }
        }}
        className='cursor-pointer active:scale-95 bg-yellow-500 px-4 py-2 rounded-xl text-black text-sm font-bold'>
          Prev
        </button>
        <h3> Page {index}</h3>
        <button 
        onClick={()=>{
          setIndex(index+1)
          printUserData='Loading...'
          setUserData([])
        }}
        
        className='cursor-pointer active:scale-95 bg-yellow-500 px-4 py-2 rounded-xl text-black text-sm font-bold'>
        Next
        </button>
      </div>
    </div>

  )
}

export default App
