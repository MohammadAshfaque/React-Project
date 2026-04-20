import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
        <a className='px-5 py-2 border rounded border-blue-200 text-blue-300'
        href='/create'>
          Add new  Products
        </a>
      </nav>
    </div>
  )
}

export default App