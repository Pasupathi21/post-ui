import { COLOR } from '@/data/color.const'
import { useDropzone } from 'react-dropzone'
import { Upload } from 'lucide-react'
export default function UploadFile() {

    const {
        acceptedFiles,
        getInputProps,
        getRootProps,
        isDragActive
    } = useDropzone()
    console.log("acceptedFiles >>>>>", acceptedFiles)
    return (
        <section className='w-full h-full flex flex-1 justify-center items-center'>
            <div {...getRootProps({ isDragActive })} className={`w-full h-full flex flex-1 flex-col justify-center items-center border-nones border-[0px] rounded-full bg-gradient-to-tr from-green-500 to-green-200`} style={{ borderColor: COLOR.green }}>
                <input {...getInputProps()} />
                <Upload style={{ color: COLOR.dark_green}} />
                <p className={`font-thin text-green-600`}>Test upload</p>
            </div>
        </section>
    )
}
