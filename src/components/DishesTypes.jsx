import { Box, Flex } from '@radix-ui/themes'
import DishesTypesCards from './DishesTypesCards'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

const DishesTypes = () => {
    return (
        <Box className='w-screen pl-48 pr-48 pt-8 pb-8'>
            <Flex direction={'column'}>
                <Flex direction={'row'} justify={'between'}>
                    <h2 className='title'>What's on your mind?</h2>
                    <Flex><ArrowLeftIcon/><span><ArrowRightIcon className='ml-4'/></span></Flex>
                </Flex>
                <Flex direction={'row'}>
                    <DishesTypesCards />
                    <DishesTypesCards />
                    <DishesTypesCards />
                    <DishesTypesCards />
                    <DishesTypesCards />
                    <DishesTypesCards />
                </Flex>
            </Flex>
        </Box>
    )
}

export default DishesTypes;