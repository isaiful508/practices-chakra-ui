import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Container, Heading, FormControl, FormLabel, Input,
  Textarea, Button, SimpleGrid, FormErrorMessage,
  useToast,  HStack, Image, Text,
  Flex, IconButton
} from '@chakra-ui/react';
import {  CloseIcon } from '@chakra-ui/icons';

const AddVideoPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    youtubeLink: '',
    thumbnailLink: '',
    date: '',
    duration: '',
    views: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: 'Video Added',
        description: `"${formData.title}" has been successfully added to the library.`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setIsSubmitting(false);
      navigate('/videos');
    }, 1500);
  };

  return (
     <Container maxW="container.xl" py={8}>
      <Box mb={8}>
        <Heading size="md" mb={1}>Add new video</Heading>
        <Text color="gray.600" fontSize="sm">
          Please fillup the form to add new video
        </Text>
      </Box>

      <Box
        as="form"
        onSubmit={handleSubmit}
        bg="white"
        p={8}
        borderRadius="md"
        boxShadow="md"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6}>
          <FormControl isInvalid={errors.title}>
            <FormLabel>Title</FormLabel>
            <Input id="title" name="title" value={formData.title} onChange={handleChange} />
            <FormErrorMessage>{errors.title}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.author}>
            <FormLabel>Author</FormLabel>
            <Input id="author" name="author" value={formData.author} onChange={handleChange} />
            <FormErrorMessage>{errors.author}</FormErrorMessage>
          </FormControl>
        </SimpleGrid>

        <FormControl mb={6}>
          <FormLabel>Description</FormLabel>
          <Textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
          <Text fontSize="sm" color="gray.500" mt={1}>
            Brief description for your video
          </Text>
        </FormControl>

        <FormControl mb={6} isInvalid={errors.youtubeLink}>
          <FormLabel>YouTube Video Link</FormLabel>
          <Input id="youtubeLink" name="youtubeLink" value={formData.youtubeLink} onChange={handleChange} />
          <FormErrorMessage>{errors.youtubeLink}</FormErrorMessage>
        </FormControl>

        <FormControl mb={6}>
          <FormLabel>Thumbnail link</FormLabel>
          <Input id="thumbnailLink" name="thumbnailLink" value={formData.thumbnailLink} onChange={handleChange} />
        </FormControl>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Duration</FormLabel>
            <Input id="duration" name="duration" value={formData.duration} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Views</FormLabel>
            <Input id="views" name="views" value={formData.views} onChange={handleChange} />
          </FormControl>
        </SimpleGrid>

        {formData.thumbnailLink && (
          <Box mt={8}>
            <Heading size="sm" mb={2}>Thumbnail Preview</Heading>
            <Box position="relative" maxW="300px">
              <Image
                src={formData.thumbnailLink}
                alt="Thumbnail preview"
                borderRadius="md"
                fallback={
                  <Box
                    height="169px"
                    width="300px"
                    bg="gray.100"
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="gray.400">Preview not available</Text>
                  </Box>
                }
              />
              <IconButton
                icon={<CloseIcon />}
                size="xs"
                position="absolute"
                top={2}
                right={2}
                colorScheme="red"
                onClick={() => setFormData(prev => ({ ...prev, thumbnailLink: '' }))}
                aria-label="Clear thumbnail"
              />
            </Box>
          </Box>
        )}

        <Flex justify="flex-end" mt={10}>
          <HStack>
            <Button variant="outline" onClick={() => navigate('/videos')}>Cancel</Button>
            <Button colorScheme="purple" type="submit" isLoading={isSubmitting}>
              Save
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default AddVideoPage;
