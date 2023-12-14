"use client"
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import { generateCouponCode } from '@/lib/generateCouponCode'
import ImageInput from '@/components/FormInputs/ImageInput'
import { makePostRequest } from '@/lib/apiRequest'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import { generateIsoFormattedDate } from '@/lib/generateIsoFormattedDate'
import { useRouter } from 'next/navigation'

export default function NewCoupon() {
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState()
  const {register, reset, watch, handleSubmit, formState:{errors}} = useForm({defaultValue: {isActive: true,},})
  const isActive =watch("isActive")
  const router = useRouter()
  function redirect(){
    router.push("/dashboard/coupons")
  }
  async function onSubmit(data){
    {/*
        -id => auto
        -title
        -code=> auto
        -isActive
        -expiryData
         */}
    

    const couponCode = generateCouponCode(data.title, data.expiryDate)
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate)
    data.expiryDate = isoFormattedDate
    data.couponCode = couponCode
    console.log(data)
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset, redirect)
  }
  return (
    <div>
        <FormHeader title="New Coupon"/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Coupon Title" name="title" register={register} errors={errors} className='w-full' />
            <TextInput label="Coupon Expiry Date" name="expiryDate" type="date" register={register} errors={errors} className='w-full'/>
            <ToggleInput label="Publish Your Coupon" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
          </div>
          <SubmitButton isLoading={loading}  buttonTitle="Create Coupon" loadingButtonTitle="Creating Coupons please wait ....."/>

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


