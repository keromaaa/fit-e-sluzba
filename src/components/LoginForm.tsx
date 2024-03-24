import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from './ui/Input'
import Button from './ui/Button'

interface FormInput {
  brojIndeksa: string
  lozinka: string
}

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 flex flex-col gap-8'>
      <Input
        {...register('brojIndeksa', { required: true, pattern: /^[iI][bB]\d{6}$/ })}
        type='text'
        placeholder='Broj indeksa'
        className={errors.brojIndeksa ? 'border-red-400' : ''}
      />
      <Input
        {...register('lozinka', {
          required: true,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        })}
        type='password'
        placeholder='Lozinka'
        className={errors.lozinka ? 'border-red-400' : ''}
      />
      {(errors.brojIndeksa || errors.lozinka) && (
        <label className='text-red-400 -my-4'>Netačan broj indeksa i/ili lozinka.</label>
      )}
      <Button type='submit' text='Prijavi se' />
    </form>
  )
}

export default LoginForm
