import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <span className='heading'>Datagrove Guidance Site </span>
      <h2 className='content'> Welcome to the DataGrove resource guidance website</h2>
      <div className='contents'>
      <h3 className="content">Contents:</h3>
        <ul>
          <li>C#</li>
          <li>Go</li>
          <li>Typescript</li>
          <li>Dart</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
      <div className='contents'>
      <ul>
          <li>React</li>
          <li>Flutter</li>
          <li>Tailwind CSS</li>

        </ul>
      </div>
      <div className='contents'>
      <ul>
          <li>Debugging</li>
          <li>VitePress</li>
          <li>Code Accessability</li>
   
        </ul>
      </div>
    </div>

  )
}

export default App
