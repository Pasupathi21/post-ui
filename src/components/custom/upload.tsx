import { COLOR } from '@/data/color.const'
import { useDropzone } from 'react-dropzone'
import { Upload } from 'lucide-react'
import { useCallback, useState } from 'react'
import FileUploadPreview from './media/preview'

interface IUploadFile {
    handleFile: (value?: any) => any,
    showPreview?: boolean
}
export default function UploadFile({
    handleFile,
    showPreview = false
}: IUploadFile) {
    const [selectedFiles, setSelectedFiles] = useState<any[]>([])
    const [preOpen, setPreOpen] = useState(false)

    const onDrop = useCallback((files: any) => {
        console.log("file >>>>>>", files)
        // handleFile(files)
        files.forEach((file: any) => {
            console.log("foreach", file)
            const fileReader = new FileReader()
            fileReader.onabort = () => console.log('file abort')
            fileReader.onerror = () => console.log('file error')
            fileReader.onload = () => {
                console.log(fileReader.result)
                console.log("DATA URL", file)
            }
        })
        setSelectedFiles(files)
        setPreOpen(true)
        handleFile(files)
    }, [])

    const {
        acceptedFiles,
        getInputProps,
        getRootProps,
        isDragActive,
    } = useDropzone({ onDrop })
    console.log("acceptedFiles >>>>>", acceptedFiles)

    return (
        <>
        <section className='w-full h-full flex flex-1 justify-center items-center'>
            <div {...getRootProps({ isDragActive })} className={`w-full h-full flex flex-1 flex-col justify-center items-center border-nones border-[0px] rounded-full ${isDragActive ? 'bg-gradient-to-br from-blue-500 to-blue-200' : 'bg-gradient-to-tr from-green-500 to-green-200'}`} style={{ borderColor: COLOR.green }}
            >
                <input {...getInputProps()} />
                <Upload style={{ color: isDragActive ? COLOR.navy_blue : COLOR.dark_green }} />
                <p className={`font-semibold ${isDragActive ? 'text-blue-600' : 'text-green-600'}`}>{isDragActive && <p>drop here</p>}</p>
            </div>
        </section>
        { showPreview && preOpen && (<FileUploadPreview files={selectedFiles} open={preOpen} setOpen={setPreOpen} />) }
        </>
    )
}
