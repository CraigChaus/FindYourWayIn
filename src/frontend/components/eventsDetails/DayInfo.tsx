import React from 'react'

export const DayInfo = ({eventday}:any) => {
  return (
    <div className='text-5xl mt-16  border-2 border-black'>
        <p>{eventday}</p>
    </div>
  )
}
export default DayInfo;