'use client'

import { useState } from "react"

type FormModel = {
  name: string
  userName: string
  email: string
  password: string
  remember: boolean
  terms: boolean
  captcha: string
}

type FormErrors = {
  email?: string
  password?: string
  remember?: string
  terms?: string
  captcha?: string
  name?: string
  userName?: string
}

export default function Home() {
  const initialState = { name: '', userName: '', email: '', password: '', remember: false, terms: false, captcha: '' }
  const [formState, setFormState] = useState<FormModel>(initialState)
  const [formErrors, setFormErrors] = useState<FormErrors | null>(null)

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, checked, type } = e.target
    if (formState) {
      setFormState({
        ...formState,
        [name]: type === 'checkbox' ? checked : value,
      })
      setFormErrors({
        ...formErrors,
        [name]: null,
      })
    }
  }

  function handleReset() {
    setFormState(initialState)
    setFormErrors(null)
  }

  async function handleSubmit() {
    const errors: FormErrors = {}
    if (!formState.name) {
      errors.name = 'Name is required'
    }
    if (!formState.userName) {
      errors.userName = 'User Name is required'
    }
    if (!formState.email) {
      errors.email = 'Email is required'
    }
    if (!formState.password) {
      errors.password = 'Password is required'
    }
    if (!formState.remember) {
      errors.remember = 'Remember me is required'
    }
    if (!formState.terms) {
      errors.terms = 'Terms and conditions is required'
    }
    if (!formState.captcha) {
      errors.captcha = 'Captcha is required'
    }
    setFormErrors(errors)
    if (Object.keys(errors).length === 0) {
      console.log('Form is valid')
      console.log(formState)
      alert('Form is valid')
    }
  }

  return (
    <main className="w-screen h-screen center_div">
      <div className="bg-black text-white w-[350px]  rounded-lg p-5 shadow-xl m-0">
        <div className="flex">
          <h1 className="text-xl grow">Login Page</h1>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
        <div className="flex mb-5">
          <div className="basis-3/4">
            <p className="text-sm">Life cycle of react components</p>
          </div>
          <div className="basis-1/4 flex justify-between">
            <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-yellow-500"></div>
          </div>
        </div>
        <form className="flex flex-col gap-2">
          <input className="input_decoration" autoComplete="on" value={formState.name} onChange={handleOnChange} placeholder="Name" type="text" name="name" />
          {formErrors?.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
          <input className="input_decoration" autoComplete="on" value={formState.userName} onChange={handleOnChange} placeholder="User Name" type="text" name="userName" />
          {formErrors?.userName && <p className="text-red-500 text-sm">{formErrors.userName}</p>}
          <input className="input_decoration" autoComplete="on" value={formState.email} onChange={handleOnChange} placeholder="Email" type="email" name="email" />
          {formErrors?.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          <input className="input_decoration" onChange={handleOnChange} value={formState.password} placeholder="Password" type="password" name="password" />
          {formErrors?.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
          <div className="flex">
            <label className="text-sm">
              <input className="input_decoration mr-2" checked={formState.remember} onChange={handleOnChange} type="checkbox" name="remember" />
              Remember me
            </label>
          </div>
          {formErrors?.remember && <p className="text-red-500 text-sm">{formErrors.remember}</p>}
          <div className="flex">
            <label className="text-sm">
              <input className="input_decoration mr-2" checked={formState.terms} onChange={handleOnChange} type="checkbox" name="terms" />
              I agree to the terms and conditions
            </label>
          </div>
          {formErrors?.terms && <p className="text-red-500 text-sm">{formErrors.terms}</p>}
          <input className="input_decoration" onChange={handleOnChange} value={formState.captcha} placeholder="Captcha" type="text" name="captcha" />
          {formErrors?.captcha && <p className="text-red-500 text-sm">{formErrors.captcha}</p>}
          <button type="button" onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-2 mt-5">Submit</button>
        </form>
      </div>
    </main>
  )
}
