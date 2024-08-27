
import { Button } from '@/components/ui/button'


import Model from '@/components/custom/model'
import img from '../../assets/images/upload-image.png'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import UploadFile from '@/components/custom/upload'


export default function Upload() {
  const [openModel, setOpenModel] = useState<boolean>(false)
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
            <div className='w-full grid grid-flow-col grid-cols-2 gap-2'>
              <div className='w-[200px] h-[5rem]'>
                <UploadFile />
              </div>
              <div className='w-[200px] h-[5rem]'>
                <UploadFile />
              </div>
            </div>
          </Model>
        )}
      </div>
    </>
  )
}
