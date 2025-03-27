import './App.css'
import StopWatch from './components/StopWatch'

function App() {

  return (
    <>
      <div className='main'>
        <div className='first'>
          <StopWatch increment={1} />
         </div>
        <div className='second'>
          <StopWatch increment={2}/>
         </div>
      </div>
    </>
  )
}

export default App
