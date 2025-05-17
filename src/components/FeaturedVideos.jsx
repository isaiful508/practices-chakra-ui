import { Box, SimpleGrid, Container } from '@chakra-ui/react'
import VideoCard from './VideoCard'
import { mockVideos } from '../data/mockData'

const FeaturedVideos = () => {

  return (
    <Box py={{ base: 8, md: 12 }} bg="gray.50">
      <Container maxW="1320px">

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6} mb={40}>
          {mockVideos.map((video) => (
            <VideoCard key={video.id} video={video} featured={video.id <= 2} />
          ))}
        </SimpleGrid>
        
      </Container>
    </Box>
  )
}

export default FeaturedVideos