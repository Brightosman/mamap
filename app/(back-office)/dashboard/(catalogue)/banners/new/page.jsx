"use client"
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import ImageInput from '@/components/FormInputs/ImageInput'
import { makePostRequest } from '@/lib/apiRequest'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import { useRouter } from 'next/navigation'

export default function NewBanner() {
  const [imageUrl, setImageUrl] =useState("")
  const [loading, setLoading] = useState(false)
  const {register, reset, watch, handleSubmit, formState:{errors}} = useForm({defaultValue: {isActive: true,},})
  const isActive =watch("isActive")
  const router = useRouter()
  function redirect(){
    router.push("/dashboard/banners")
  }
  async function onSubmit(data){
    {/*
        -id=> auto
        -title
        -link
        -image
        -isActive
    */}
    
  
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading, "api/banners", data, "Banner", reset, redirect)
    setImageUrl("")
  }
  return (
    <div>
        <FormHeader title="New Banner"/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Banner Title" name="title" register={register} errors={errors} />
            <TextareaInput label="Banner Link" name="link" type="url" register={register} errors={errors} />
            {/* Configure this end point  in the core.js */}
            <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="bannerImageUploader" label="Banner Image" />
            <ToggleInput label="Publish Your Banner" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
          </div>
          <SubmitButton isLoading={loading}  buttonTitle="Create Banner" loadingButtonTitle="Creating Banner please wait ....."/>

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

