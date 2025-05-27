import {  useState } from 'react'
import { videoMimeTypes, audioMimeTypes, imageMimeTypes } from '@/data/app.const'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog'
import { COLOR } from '@/data/color.const'
import Videoplayer from './videoplayer/videoplayer';

interface IPreview {
    files: File[];
    open: boolean;
    title?: string;
    description?: string;
    setOpen: (value: boolean) => void
}
export default function FileUploadPreview({
    files,
    open,
    title = 'Preview',
    description,
    setOpen
}: IPreview) {
    const [previewFiles, _setPreviewFiles] = useState<any[]>([
        ...files.map((m: any) => ({
            url: URL.createObjectURL(m),
            type: m.type
        }))
    ])
    const handleClose = () => {
        previewFiles.map((file) => URL.revokeObjectURL(file.url))
        setOpen(false)
    }
    console.log("previewFiles >>>>>>>", previewFiles)
    // useEffect(() => {
    //     return () => {
    //         if (previewFiles.length) {
    //             previewFiles.map(file => URL.revokeObjectURL(file.url))
    //         }
    //     }
    // }, [])
    return (
        <Dialog open={open} onOpenChange={() => handleClose()} >
            <DialogTrigger asChild>
            </DialogTrigger>
            <DialogContent className={`sm:max-w-[425px] h-[50%] bg-[${COLOR.primary_background}]`}>
                <DialogHeader>
                    <DialogTitle className='text-white'>{title && title}</DialogTitle>
                    <DialogDescription className={`text-white`}>
                        {description && description}
                    </DialogDescription>
                </DialogHeader>
                <div className='w-full h-[50%] flex flex-1 flex-wrap justify-center items-center '>
                    {previewFiles.map((file: Record<string, any>) => (
                        imageMimeTypes.includes(file.type) ? <img src={file.url} alt="" className='' /> :
                            audioMimeTypes.includes(file.type) ? <video src={file.url} /> :
                                videoMimeTypes.includes(file.type) ? <Videoplayer
                                    file={file}
                                    vControls={{
                                        autoPlay: true
                                    }}
                                /> :
                                    <>No preview content</>
                    ))}
                </div>
            </DialogContent>
        </Dialog>

    )
}
