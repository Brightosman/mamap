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
import NewFarmerForm from '@/components/backoffice/NewFarmerForm'

export default function NewFarmer() {
  
  return (
    <div>
        <FormHeader title="New Farmer"/>
        <NewFarmerForm />
    </div>
  )
}


