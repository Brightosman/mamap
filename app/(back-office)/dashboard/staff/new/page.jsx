"use client"
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import { generateUserCode } from '@/lib/generateUserCode'
import ImageInput from '@/components/FormInputs/ImageInput'
import { makePostRequest } from '@/lib/apiRequest'
import ToggleInput from '@/components/FormInputs/ToggleInput'

export default function NewStaff() {
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState()
  const {register, reset, watch, handleSubmit, formState:{errors}} = useForm({defaultValue: {isActive: true,},})
  const isActive = watch("isActive")
  async function onSubmit(data){
    const code = generateUserCode("B9A", data.name)
    data.code = code
    console.log(data)
    makePostRequest(setLoading, "api/staffs", data, "Staff", reset)
  }
  return (
    <div>
        <FormHeader title="New Staff"/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Staff's Full Name" name="name" register={register} errors={errors} />
            <TextInput label="NIN (Id Number)" name="nin" register={register} errors={errors} className='w-full'/>
            <TextInput label="Date of Birth" name="dob" type='date' register={register} errors={errors} className='w-full'/>
            <TextInput label="password" name="password" type='password' register={register} errors={errors} className='w-full' />
            <TextInput label="Staff's Email" name="email" type="email" register={register} errors={errors} className='w-full' />
            <TextInput label="Staff's Phone" name="phone" type="tel" register={register} errors={errors} className='w-full' />
            <TextInput label="Staff's Address" name="physicalAddress" register={register} errors={errors} className='w-full' />
            <TextInput label="Staff's Emergency Contact Person" name="contactPerson" register={register} errors={errors} className='w-full' />
            <TextInput label="Staff's Emergency Contact Person Phone" name="contactPersonPhone" type="tel" register={register} errors={errors} className='w-full' />
            <TextareaInput label="Staff's Contract Terms" name="terms" register={register} errors={errors}/>
            <TextareaInput label="Notes" name="notes" register={register} errors={errors} isRequired={false} />
            <ToggleInput label="Staff Status" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
            
          </div>
          <SubmitButton isLoading={loading}  buttonTitle="Create Staff" loadingButtonTitle="Creating Staff please wait ....."/>

        </form>
        {/*
        -id
        -title
        -slug
        -description
        -image
         */}
    </div>
  )
}


