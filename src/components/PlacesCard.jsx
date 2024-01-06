import { Box } from "@radix-ui/themes"

const PlacesCard = ({text}) => {
  return (
    <Box className='border-solid border-2 border-gray rounded-lg w-72 mr-12 mb-4 h-12 flex items-center justify-center text-base font-normal text-zinc-950 opacity-75 font-Grotesque' >{text}</Box>
  )
}

export default PlacesCard;