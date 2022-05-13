import Background from '../../public/assets/destination/background-destination-desktop.jpg'

const destination = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat flex justify-center w-screen h-screen"  style={{  backgroundImage: `url(${Background})`}}>
      <h1 className="text-slate-500 text-5xl">Space Tourism </h1>
      
    </div>
  )
}

export default destination