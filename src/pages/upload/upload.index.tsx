
import { Button } from '@/components/ui/button'


import Model from '@/components/custom/model'
import img from '../../assets/images/upload-image.png'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
// ******** shade cn
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from "@/components/ui/separator"

import UploadFile from '@/components/custom/upload'
import { useFormik } from 'formik'



export default function Upload() {
  const [openModel, setOpenModel] = useState<boolean>(false)
  const [formState, setFormState] = useState<any>({
    title: null,
    description: null
  })
  const [preFile, setPreFile] = useState<any>(null)
  const handleFile = (files: any[]) => {
    console.log("files >>>>>>", files)
    const objURL = URL.createObjectURL(files[0])
    console.log("URL >>>>>>", objURL)
    setPreFile(objURL)
  }
  const handleOnSubmit = (values: Record<string, any>) => {
    console.log("form data", values)
  }
  const formik = useFormik(
    {
      initialValues: formState,
      onSubmit: handleOnSubmit
    }
  )
  console.log("openModel", openModel)
  return (
    <>
      <div className='w-full flex felx-1 justify-center items-center'>
        <div className='w-full h-full flex-col flex flex-1 justify-center items-center'>
          <div>
            <img src={img} alt="" className='h-[10rem] w-[12rem]' />
          </div>
          <div>
            <Button className='p-1 flex flex-1 flex-row gap-2 justify-between' onClick={() => setOpenModel(true)}>
              <div>
                <Plus />
              </div>
              <div>
                ADD
              </div>
            </Button>
          </div>
        </div>
        {openModel && (
          <Model
            open={openModel}
            setOpen={setOpenModel}
            title={'Add Post'}
            description={'share your thoughts through the post 🙂'}
          >
            <div className='w-full grid grid-flow-col grid-cols-1 gap-2 justify-center '>
              <form className='w-full flex flex-col' onSubmit={formik.handleSubmit}>
                <div className='w-full flex flex-1 justify-center items-center '>
                  <div className='w-[200px] h-[5rem]'>
                     <UploadFile handleFile={handleFile} showPreview={true} />
                  </div>
                </div>
                <Separator className='bg-green-400 rounded-2xl border-1 mt-2 w-full' />
                <div className='w-full flex flex-1 flex-col gap-2'>
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input name="title" value={formik?.values?.title} onChange={formik.handleChange} />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input name="description" value={formik?.values?.description} onChange={formik.handleChange} />
                  </div>
                  <div className='flex flex-1 justify-center'>
                    <Button
                      disabled={false}
                      type="submit" className='w-[80%] rounded-2xl bg-gradient-to-l from-green-500 to-yellow-200 transform transition-transform duration-500 hover:scale-105'>Post</Button>
                  </div>
                </div>
              </form>
            </div>
          </Model>
        )}
      </div>
    </>
  )
}
