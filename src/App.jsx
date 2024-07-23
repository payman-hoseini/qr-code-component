import img from './assets/images/image-qr-code.png'

function App() {
  

  return (
    <>
      <div className="bg-Slate-300 h-screen grid place-items-center">
        <div className='bg-white max-w-[300px] w-[88vw] p-4 rounded-2xl shadow-xl'>
            <div>
              <img src={img} alt="" className='rounded-xl'/>
            </div>
            <div className='text-center mt-5 font-Outfit'>
              <p className='text-Slate-900 font-bold text-lg px-4'>Improve your front-end skills by building projects</p>
              <p className='text-Slate-500 text-sm px-5 mt-4 mb-5'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
