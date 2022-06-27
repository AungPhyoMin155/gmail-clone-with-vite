import { Close } from '@mui/icons-material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { db } from '../../firebase';
import firebase from "firebase/compat/app"
import { closeSendMessage } from '../features/counter/mailSlice';

const SendMail = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    const onSubmit = formData => {
        console.log(formData)

        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage()); 
    };

    const inputCss = `h-[30px] p-[10px] border-none outline-none border-b border-gray-100`;
  return (
    <div className='absolute bottom-0 right-[50px] bg-[#404040] w-[40%] h-[40%] max-w-[500px] rounded-t-md flex flex-col border border-gray-100 shadow-lg'>
        {/* Header */}
        <div className='flex justify-between p-[13px] items-center text-gray-500'>
            <h3 className='text-gray-100 text-[13px]'>New Message</h3>
            <Close onClick={()=>dispatch(closeSendMessage())} className='cursor-pointer' />
        </div> 
        <form onSubmit={handleSubmit(onSubmit)} className='flex-1 flex flex-col'>
            <input {...register("to", { required: true })} className={inputCss} placeholder='To' type="email" />
            {/* ref={register({ required: true })} */}
            {errors.to && <p className='bg-white text-red-600 p-2 text-sm'>To is Required!</p>}

            <input {...register("subject", { required: true })} className={inputCss} placeholder="Subject" type="text" />
            {errors.subject && <p className='bg-white text-red-600 p-2 text-sm'>Subject is Required!</p>}

            <input {...register("message", { required: true })} placeholder='Message...' className={`flex-1 ${inputCss}`} type="text" />
            {errors.message && <p className='bg-white text-red-600 p-2 text-sm'>Message is Required!</p>}

            <button type='submit' className='bg-[#3079ed] m-[15px]'>Send</button>
        </form>
    </div>
  )
}

export default SendMail