import { CardMedia, ImageList, ImageListItem } from "@mui/material"
import { useCallback } from "react";

type MessageMediaProps = {
    media: string[] 
}

const MessageMedia = ({media}: MessageMediaProps) => {
    const getCols = useCallback(() => {
		if (media?.length !== 0 && media !== undefined) {
			return Math.ceil(Math.sqrt(media?.length));
		}
		return 1;
	}, [media]);

    if(media?.length === 0) {
        return null
    }

    return ( 
        <CardMedia>
            <ImageList
                sx={{ width: 500, height: 450 }}
                cols={getCols()}
                rowHeight={450 / (media?.length || 1)}
            >
                {
                    media?.map(photo => 
                        <ImageListItem key={photo}>
                            <img src={photo} alt="Photo"/>
                        </ImageListItem>
                        )
                }
            </ImageList>
        </CardMedia>
    )
}

export default MessageMedia