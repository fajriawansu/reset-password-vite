import { useState } from 'react'
import './App.css'
import MyInput from '@/components/MyInput'
import PasswordIndicator from './components/PasswordIndicator';

function App() {
  const [isUnmatch, setIsUnmatch] = useState(false);
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [indicator, setIndicator] = useState({
    isLong: false,
    alphanumeric: false,
    capitalize: false,
    symbol: false
  })

  const onPassChange = (val) => {
    setIndicator({
      isLong: val?.length > 7,
      alphanumeric: /[a-zA-Z]/.test(val) && /[0-9]/.test(val),
      capitalize: /[A-Z]/.test(val),
      symbol: /[-+_!@#$%^&*.,?]/.test(val)
    })
    setNewPass(val);
    setIsUnmatch(false)
  }

  const onConfirmChange = (val) => {
    setConfirmPass(val);
    setIsUnmatch(false)
  }

  const onSubmit = () => {
    console.log(newPass === confirmPass, newPass, confirmPass)
    if(newPass === confirmPass) {
      alert("Success!")
    } else setIsUnmatch(true)
  }

  return (
    <div className="App w-screen">
      <div className='w-full flex max-md:flex-col max-md:items-center items-start justify-center gap-8'>
        <div className="flex flex-col gap-8">
          <div className='text-4xl font-bold'>Reset Password</div>
          <MyInput.Password label="New Password" cbChange={onPassChange} />
          <div>
            <MyInput.Password label="Confirm New Password" cbChange={onConfirmChange} />
            {isUnmatch && <div className="text-red-400">Password do not match</div> }
          </div>
          <button onClick={onSubmit} className={`md:w-96 w-80 p-4 bg-green-700 text-md rounded-md`}>Submit</button>
        </div>
        <div className='pt-20'>
          <PasswordIndicator
            isLong={indicator.isLong}
            alphanumeric={indicator.alphanumeric}
            capitalize={indicator.capitalize}
            symbol={indicator.symbol}
          />
        </div>
      </div>
    </div>
  )
}

export default App
