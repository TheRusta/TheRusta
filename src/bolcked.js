import React from 'react';
import { Box, Badge, SimpleGrid, Container, Image, Link, Text } from '@chakra-ui/react';

const dataList = [
    {
        id: 1,
        title: 'GOA  TOURS',
        //  authorName: 'Ali',
         content: `ALL  BEACHES &  GOA  TOURS`
        
    },
    {
        id: 2,
        title: 'VECHILES  ON  RENT',
        // authorName: 'Ali',
        content: `SCOOTER / CAR`
    },
    {
        id: 3,
        title: 'NEAR  BY  BEACHES',
        //     authorName: 'Ali',
        content: 'MANDREM / KERI / ASHWEM / MORJIM / ARAMBOL'
    }
];

const BlogCards = () => {
    return (
        <Container bg="white" maxWidth="full" mx="auto" my="0" p={{ base: 8, md: 4 }}>
            <Box color='black' fontSize="3xl" fontWeight="bold" mb={10} textAlign="center">
                AVAILABLE FOR BOOKING ON ARRIVAL
            </Box>
            <SimpleGrid columns={[1, 2, 3]} spacing="40px">
                {dataList.map((blog) => {
                    return (
                        <Box position="relative" key={blog.id}>
                            <Box fontSize="sm" position="absolute" right="5px" margin="5px" zIndex="1">
                                {/* <Badge rounded="full" p="2px 8px" colorScheme="red" as="button">
                                    New
                                </Badge> */}
                            </Box>
                            <Link
                                aligntext='center'
                                color=" black"
                                href="blog"
                                _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)' }}>
                                <Box
                                    borderWidth=""
                                    shadow="md"
                                    rounded="lg"
                                    overflow="hidden"
                                    position="relative"
                                >
                                    <Image src="asset/cc.jpg" alt="Blog image" />
                                    <Box p={{ base: 4, lg: 6 }}>
                                        <Box d="flex" alignItems="baseline">
                                            <Box
                                                fontSize="20px" textAlign={'center'}
                                                fontWeight="bold"
                                                as="h2"
                                                letterSpacing="wide"
                                                textTransform="uppercase"

                                            >
                                                {blog.title}
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box color="gray.600" fontSize="sm">
                                                {/* <Badge rounded="full" px="2" colorScheme="teal">
                                                    {blog.authorName}
                                                </Badge> */}
                                            </Box>
                                        </Box>
                                        <Text
                                            textAlign={'center'}
                                            mt="2"
                                            ml='2'
                                            fontWeight="300"
                                            noOfLines={3}
                                            lineHeight="tight"
                                            color='black'
                                            fontSize="lg"
                                        >
                                            {blog.content}
                                        </Text>
                                    </Box>
                                </Box>
                            </Link>
                        </Box>
                    );
                })}
            </SimpleGrid>
        </Container>
    );
};

export default BlogCards;