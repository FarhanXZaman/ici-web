import React from 'react'


export default function Teacher(props) {
  const{teacher, desp} = props;
  return (
    <>
        <div className='w-auto h-max mx-4 px-3 pt-6 gap-6 flex justify-between bg-white rounded-2xl border-2'>
            <img className='w-28 h-40 mt-2 object-cover rounded-2xl'  src={teacher} alt="" />
            
                <p className="details text-black text-[13px] font-mono w-56">{desp}</p>
            
        </div>
    </>
  )
}
