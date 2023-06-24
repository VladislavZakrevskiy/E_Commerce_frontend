import { ReactNode, useRef} from 'react'
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface IFileUploadProps {
    setValue: UseFormSetValue<FieldValues>
    children: ReactNode
}

const FileUpload = ({setValue, children}: IFileUploadProps) => {
    const ref = useRef<HTMLInputElement>()

    return (
        <div onClick={() => ref.current?.click()}>
            <input type='file' style={{display: 'none'}} ref={ref} onChange={e => setValue('photo', e.target.files[0])}/>
            {children}
        </div>
    )
}

export default FileUpload