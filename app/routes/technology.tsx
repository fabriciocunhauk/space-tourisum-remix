import Background from '../../public/assets/technology/background-technology-desktop.jpg'

const technology = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat flex justify-center w-screen h-screen"  style={{  backgroundImage: `url(${Background})`}}>
      <div>
        <h1 className="text-slate-500 text-5xl">Space</h1>
      </div>
    </div>
  )
}

export default technology