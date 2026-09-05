import { DocumentBrokenIcon, DownloadPaperBrokenIcon, EditBrokenIcon, EditSquareBroken, GameBroken, ImageBrokenIcon, VideoBrokenIcon, VolumeUpBrokenIcon } from '@/assets/icons';

export const typeIconSelector = (type : string) => {
    switch (type) {
        case "video":
            return <VideoBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "picture":
            return <ImageBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "text":
            return <DownloadPaperBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "worksheet":
            return <DocumentBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "practice":
            return <EditBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "test":
            return <EditSquareBroken cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "game":
            return <GameBroken cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        case "audio":
            return <VolumeUpBrokenIcon cls={"w-6 h-6 fill-gray-600 group-hover:fill-white transiton"} />
        default:
            return 'فایل'
    }
}