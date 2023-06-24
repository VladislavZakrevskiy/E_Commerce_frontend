import {ImageList} from '@mui/material'
import Image from '../shared/Image'

interface IImagesListProps {
    images: string[]
}

const ImagesList = ({images}: IImagesListProps) => {
  return (
    <ImageList gap={1}>
      {
        images.map((image, index) => <Image alt={`${index + 1} Photo`} src={image}/>)
      }
    </ImageList>
  )
}

export default ImagesList