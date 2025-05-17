import { Box, Flex, Button, Image, HStack, useDisclosure, IconButton, 
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import navLogo from '../assets/lms.svg'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box 
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      transition="all 0.3s"
      bg={scrolled ? 'white' : 'transparent'}
      boxShadow={scrolled ? 'md' : 'none'}
    >
      <Flex 
        justify="space-between" 
        align="center" 
        maxW="1200px" 
        mx="auto" 
        px={{ base: 4, md: 6 }} 
        py={3}
      >
        <Box as={RouterLink} to="/">
          <Flex align="center">
            <Box w="40px" h="40px" mr={2}>
              <Image src={navLogo} alt="Logo" boxSize="40px" borderRadius="full" />
            </Box>
          </Flex>
        </Box>

        <HStack>
          <Button
            as={RouterLink}
            to="/add-video"
            colorScheme="brand"
            variant="solid"
            leftIcon={<AddIcon />}
            size={{ base: 'sm', md: 'md' }}
            display={{ base: 'none', md: 'flex' }}
          >
            Add Video
          </Button>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            variant="ghost"
            aria-label="Open menu"
            colorScheme="brand"
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
  
              <Button
                as={RouterLink}
                to="/add-video"
                leftIcon={<AddIcon />}
                colorScheme="brand"
                w="full"
                onClick={onClose}
              >
                Add Video
              </Button>
    
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Header