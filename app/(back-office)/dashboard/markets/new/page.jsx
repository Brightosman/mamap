"use client"
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import ImageInput from '@/components/FormInputs/ImageInput'
import { makePostRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import ToggleInput from '@/components/FormInputs/ToggleInput'
import SelectInput from '@/components/FormInputs/SelectInput'

export default function NewMarket() {
  const [logoUrl, setLogoUrl] =useState("")
  const [loading, setLoading] = useState(false)
  const categories = [
    {
      id:1,
      title: "Category 1"
    },
    {
      id:2,
      title: "Category 2"
    },
    {
      id:3,
      title: "Category 3"
    },
    {
      id:4,
      title: "Category 4"
    },
  ]
  const {register, reset, watch, handleSubmit, formState:{errors}} = useForm({defaultValue: {isActive: true,},})
  const isActive = watch("isActive")
  async function onSubmit(data){
    {/*
        -id=> auto
        -title
        -slug => auto
        -logo
        -description
    */}
    
    const slug = generateSlug(data.title)
    data.slug= slug
    data.logoUrl = logoUrl
    console.log(data)
    makePostRequest(setLoading, "api/markets", data, "Market", reset)
    setLogoUrl("")
  }
  return (
    <div>
        <FormHeader title="New Market"/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Market Title" name="title" register={register} errors={errors} className='w-full' />
            <SelectInput label="Select Categories" name="categoryIds" register={register} errors={errors} className='w-full' options={categories} multiple={true} />
            <TextareaInput label="Market Description" name="description" register={register} errors={errors} />
            {/* Configure this end point  in the core.js */}
            <ImageInput imageUrl={logoUrl} setImageUrl={setLogoUrl} endpoint="marketLogoUploader" label="Market Logo" />
            <ToggleInput label="Market Status" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
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


