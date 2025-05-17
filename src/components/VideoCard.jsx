import { Box, Image, Flex, Text, Badge, useColorModeValue, AspectRatio } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import logo from '../assets/lms.svg'

const VideoCard = ({ video }) => {
  const { id, title, thumbnail, duration, views, date, author } = video
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current

    const hoverAnimation = {
      y: -5,
      duration: 0.3,
      ease: "power2.out"
    }

    card.addEventListener("mouseenter", () => {
      gsap.to(card, hoverAnimation)
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" })
    })

    return () => {
      card.removeEventListener("mouseenter", () => gsap.to(card, hoverAnimation))
      card.removeEventListener("mouseleave", () => gsap.to(card, { y: 0 }))
    }
  }, [])

  return (
    <Box
      as={Link}
      to={`/videos/${id}`}
      ref={cardRef}
      overflow="hidden"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="md"
      position="relative"
      height="100%"
      display="flex"
      flexDirection="column"
    >

      <AspectRatio ratio={16 / 9}>
        <Box position="relative">
          <Image
            src={thumbnail}
            alt={title}
            objectFit="cover"
            w="100%"
            h="100%"
          />
          <Badge
            position="absolute"
            bottom="8px"
            right="8px"
            bg="blackAlpha.700"
            color="white"
            px="2"
            py="1"
            borderRadius="md"
            fontSize="xs"
          >
            {duration}
          </Badge>
        </Box>
      </AspectRatio>

      <Flex direction="column" p="3" flex="1">
        <Box mb="2">
          <Flex gap={2} alignItems="center">
           <Box>
             <img src={logo} alt="" />
           </Box>
            <Text fontWeight="600" noOfLines={2} mb="1">
              {title}
            </Text>
          </Flex>
          <Text fontSize="sm" color="gray.600">
            {author}
          </Text>
        </Box>

        <Flex
          mt="auto"
          fontSize="xs"
          color="gray.500"
        >
          <Text>{views} views</Text>
          <Text mx="1">•</Text>
          <Text>{date}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default VideoCard