"use client"
import TextInput from '@/components/FormInputs/TextInput'
import FormHeader from '@/components/backoffice/FormHeader'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import SubmitButton from '@/components/FormInputs/SubmitButton'
import TextareaInput from '@/components/FormInputs/TextAreaInput'
import { generateSlug } from '@/lib/generateSlug'
import ImageInput from '@/components/FormInputs/ImageInput'
import { makePostRequest } from '@/lib/apiRequest'
import SelectInput from '@/components/FormInputs/SelectInput'
import ToggleInput from '@/components/FormInputs/ToggleInput'

export default function NewCategory() {
  const [imageUrl, setImageUrl] =useState("")
  const markets = [
    {
      id:1,
      title: "Mama Praise Afro Market Evreux"
    },
    {
      id:2,
      title: "Papa Liso Afro Market Caen"
    },
    {
      id:3,
      title: "Mama Josh Afro Market Rouen"
    },
    {
      id:4,
      title: "Papa Toyi Afro Market Lille"
    },
  ]
  const [loading, setLoading] = useState(false)
  const {register, reset, watch, handleSubmit, formState:{errors}} = useForm({defaultValue: {isActive: true,},})
  const isActive =watch("isActive")
  async function onSubmit(data){
    {/*
        -id
        -title
        -slug
        -description
        -image
         */}
    
    const slug = generateSlug(data.title)
    data.slug = slug
    data.imageUrl = imageUrl
    console.log(data)
    makePostRequest(setLoading, "api/categories", data, "Category", reset)
    setImageUrl("")
  }
  return (
    <div>
        <FormHeader title="New Category"/>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput label="Category Title" name="title" register={register} errors={errors} className='w-full' />
            <SelectInput label="Select Markets" name="marketIds" register={register} errors={errors} className='w-full' options={markets} multiple={true} />
            <TextareaInput label="Category Description" name="description" register={register} errors={errors}/>
            <ImageInput imageUrl={imageUrl} setImageUrl={setImageUrl} endpoint="categoryImageUploader" label="Category Image" />
            <ToggleInput label="Publish Your Category" name="isActive" trueTitle="Active" falseTitle="Draft" register={register} />
          </div>
          <SubmitButton isLoading={loading}  buttonTitle="Create Category" loadingButtonTitle="Creating Category please wait ....."/>

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


