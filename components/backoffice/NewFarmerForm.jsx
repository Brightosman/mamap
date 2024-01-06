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
import { useRouter } from 'next/navigation'
import ArrayItemsInput from '../FormInputs/ArrayItemsInput'

export default function NewFarmerForm({ user }) {
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState()
  const [imageUrl, setImageUrl] = useState("")
  const [products, setProducts] = useState([])
  const {register, reset, watch, handleSubmit, formState:{errors},} = useForm({defaultValues: {isActive: true, 
    ...user,
  },});
  

  const router = useRouter();
  function redirect(){
    router.push("/dashboard/farmers")
  }

  const isActive = watch("isActive")

  async function onSubmit(data){
    console.log(data)
    const code = generateUserCode("B9A", data.name)
    data.code = code
    data.products = products
    data.userId = user.id
    data.profileImageUrl = imageUrl;
    
    makePostRequest(setLoading, "api/farmers", data, "Farmer Profile", reset, redirect)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Farmer's Full Name" name="name" register={register} errors={errors} className='w-full' />
            <TextInput label="Farmer's Phone" name="phone" type="tel" register={register} errors={errors} className='w-full' />
            <TextInput label="Farmer's Email" name="email" type="email" register={register} errors={errors} className='w-full' />
            <TextInput label="Farmer's Address" name="physicalAddress" register={register} errors={errors} className='w-full' />
            <TextInput label="Farmer's Contact Person" name="contactPerson" register={register} errors={errors} className='w-full' />
            <TextInput label="Farmer's Contact Person Phone" name="contactPersonPhone" type="tel" register={register} errors={errors} className='w-full' />
            {/* Acre */}
            <TextInput label="What is the size of your Warehouse" name="landSize" type="number" register={register} errors={errors} className='w-full' />
            <TextInput label="What is the main product you can supply" name="mainCrop" type="text" register={register} errors={errors} className='w-full' />
            <ArrayItemsInput setItems={setProducts} items={products} itemTitle="Product"/>
            {/* Configure this endpoint in the core js */}
            <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="farmerProfileUploader" label="Farmer Profile Image" />
            <TextareaInput label="Farmer's Payment Terms" name="terms" register={register} errors={errors} isRequired={false}/>
            <TextareaInput label="Notes" name="notes" register={register} errors={errors} isRequired={false} />
            <ToggleInput label="Farmer Status" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
            
          </div>
          <SubmitButton isLoading={loading}  buttonTitle="Create Farmer" loadingButtonTitle="Creating Farmer please wait ....."/>

    </form>
  )
}



