import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';


const Testimonial = ({ children }) => {
  return <Box >{children} </ Box>
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue( '')}
      boxShadow={'lg1'}
      p={18}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 8,
        borderRight: 'solid transparent',
        borderRightWidth: 8,
        borderTop: 'solid',
        borderTopWidth: 8,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title, }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={{ md: "white", sm: "white" }}>
      <Container maxW={'5xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={6} align={'center'}>
          {/* <Heading>Our Clients Speak</Heading> */}
          <Text margin='0 auto' textAlign="center"fontWeight='bold'fontSize={'25px'}>WE HAVE BEEN WORKING WITH CLIENTS AROUND THE WORLD</Text>
        </Stack>
        <Stack margin="0 auto"
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 4, lg: 16}}>

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading fontsize="20px">Amazing Stay!!</TestimonialHeading>
              <TestimonialText>
              I've spent a lot of time here, Sep and Sunny are great hosts, i don't see how anyone could have a bad experience here. 
              </TestimonialText>
            </TestimonialContent>
            {/* <TestimonialAvatar
              // src={
              //   'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              // }
              // name={'Jane Cooper'}
              // title={'CEO at ABC Corporation'}
            /> */}
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading><Text fontsize='10px"'>Lovely Place!!</Text></TestimonialHeading>
              <TestimonialText>
              The Rusta is a loving and caring place in a dream like location, off the buzzing main road with a pool overlooking hills. The hosts are very attentive and friendly!
              </TestimonialText>
            </TestimonialContent>
            {/* <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              // title={'CEO at ABC Corporation'}
            /> */}
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Must Come & Stay !!</TestimonialHeading>
              <TestimonialText>
              This place is a home full of Love
my stay there has been a true blessing ... the host ,service, smiles , the vibe , the music, the pool and the food.
              </TestimonialText>
            </TestimonialContent>
            {/* <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              // title={'CEO at ABC Corporation'}
            /> */}
          </Testimonial>

        </Stack>
      </Container>

    </Box>

  );
}