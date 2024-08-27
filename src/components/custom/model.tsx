import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { COLOR } from '@/data/color.const';

interface IUploadModel {
    open: boolean;
    setOpen: (value: any) => void;
    description: string;
    title: string;
    children: React.ReactNode | JSX.Element | any
}

export default function UploadModel({ open, setOpen, description, title, children }: IUploadModel) {
    return (
        <Dialog open={open} onOpenChange={() => setOpen(false)} >
            <DialogTrigger asChild>
            </DialogTrigger>
            <DialogContent className={`sm:max-w-[425px] bg-[${COLOR.primary_background}]`}>
                <DialogHeader>
                    <DialogTitle className='text-white'>{title && title}</DialogTitle>
                    <DialogDescription className={`text-white`}>
                       { description && description }
                    </DialogDescription>
                </DialogHeader>
                {children}
                {/* <DialogFooter>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    )
}
