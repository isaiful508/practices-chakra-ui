import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  Box, Container, AspectRatio, Heading, Text, Flex, 
  HStack, Button, Divider,  SimpleGrid,
  Alert, AlertIcon, IconButton
} from '@chakra-ui/react'
import { ArrowBackIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import VideoCard from '../components/VideoCard'
import { mockVideos } from '../data/mockData'

const VideoDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  
  useEffect(() => {
    const fetchVideo = () => {
      setLoading(true)
      try {
        const foundVideo = mockVideos.find(v => v.id.toString() === id)
        if (foundVideo) {
          setVideo(foundVideo)
          const related = mockVideos
            .filter(v => v.id.toString() !== id)
            .slice(0, 4)
          setRelatedVideos(related)
        } else {
          setError('Video not found')
        }
      } catch (err) {
        setError('Failed to load video')
      } finally {
        setLoading(false)
      }
    }
    
    fetchVideo()
  }, [id])
  
  if (loading) {
    return (
      <Container maxW="1200px" py={8}>
        <Flex justify="center" align="center" height="400px">
          <Text>Loading video...</Text>
        </Flex>
      </Container>
    )
  }
  
  if (error) {
    return (
      <Container maxW="1200px" py={8}>
        <Alert status="error" borderRadius="md">
          <AlertIcon />
          {error}
        </Alert>
        <Button 
          leftIcon={<ArrowBackIcon />} 
          mt={4}
          onClick={() => navigate('/videos')}
        >
          Back to videos
        </Button>
      </Container>
    )
  }
  
  return (
    <Container maxW="1320px" py={8}>
      
      <AspectRatio ratio={16/9} mb={6} borderRadius="lg" overflow="hidden" boxShadow="md">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/un5c9A5m-I0?si=t2K10uGoCKX3LyT-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </AspectRatio>
      
        <Box mb={8}>
          <Flex 
            justify="space-between" 
            align={{ base: 'flex-start', md: 'center' }}
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 3, md: 0 }}
            mb={3}
          >
            <Heading size="lg">{video.title}</Heading>
            
            <HStack>
              <IconButton
                icon={<EditIcon />}
                aria-label="Edit video"
                variant="ghost"
                colorScheme="brand"
              />
              <IconButton
                icon={<DeleteIcon />}
                aria-label="Delete video"
                variant="ghost"
                colorScheme="red"
              />
            </HStack>
          </Flex>
          
          <Flex 
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', md: 'center' }}
            gap={2}
            mb={6}
          >
            <HStack>
              <Text color="gray.600">{video.views} views</Text>
              <Text color="gray.600">•</Text>
              <Text color="gray.600">{video.date}</Text>
            </HStack>

          </Flex>
          
          <Divider mb={6} />
          
        
        </Box>
      
      <Box mb={8}>
        <Heading size="md" mb={4}>Related Videos</Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
          {relatedVideos.map(relatedVideo => (
            <VideoCard key={relatedVideo.id} video={relatedVideo} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default VideoDetailPage