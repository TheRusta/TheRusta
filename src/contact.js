import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Link,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Center,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function Contact() {
  return (
    <Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg={{ md: "#b9f5d0", sm: "blue" }}
          color="black"
          borderRadius="3xl"
          m={{ sm: 4, md: 16, lg: 35 }}
          p={{ sm: 5, md: 5, lg: 35 }}>
          <Box >
            <Wrap spacing={{ base: 12, sm: 4, md: 5, lg: 20 }}>
              <WrapItem justify={{ sm: "center" }}>
                <Center>

                  <Box textAlign={"center"}
                    padding="40px 40px 0px 40px">
                    <Heading>Contact Us</Heading>
                    <Text alignItems="center" mt={{ sm: 4, md: 2, lg: 3 }} color="black">
                      Fill up the form below to contact
                    </Text>
                    <Box textAlign='center'py={{ base: 5, sm: 8, md: 4, lg: 5 }}>
                      <VStack pl={0} spacing={3} alignItems="center">
                        <Button
                         as={Link}
                         href="whatsapp"
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          // _hover={{ border: '2px solid black' }}
                          leftIcon={<MdPhone color="black" size="20px" />}>
                          <Text font-color="black" >+91-9008257407</Text>
                        </Button>
                        <Button
                         as={Link}
                         href="https://mail.google.com/"
                          size="xl"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color="blackF"
                          // _hover={{ border: '2px solid black' }}
                          leftIcon={<MdEmail color="black" size="20px" />}>
                          <Text  textAlign='center'font-color="black">therustaholidayhome@gmail.com</Text>
                        </Button>
                        <Button
                         as={Link}
                         href="https://www.google.com/maps"
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="black"
                          // _hover={{ border: '2px solid black' }}
                          leftIcon={<MdLocationOn color="black" size="20px" />}>
                          <Text textAlign={'center'} font-color="black" >Arambol,Goa, India.</Text>
                        </Button>
                      </VStack>
                    </Box>

                  </Box>
                </Center>

              </WrapItem>
              <WrapItem>
                <Box py={{ base: '0rem', sm: "4", md: '0rem' }}
                  px={{ base: '0rem', sm: "4", md: '0' }} bg="white" borderRadius="1g">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={2}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button 
                         as={Link}
                        href="https://www.facebook.com/TheRusta"
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}