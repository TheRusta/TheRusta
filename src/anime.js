import * as React from 'react';
import { Container, Text, SimpleGrid, Box, chakra, Stack, HStack, Icon } from '@chakra-ui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

// interface StatData {
//   label: string;
//   score: string;
// }

const statData = [
    {
        label: 'Clients Served',
        score: '1k+'
    },
    {
        label: 'Bookings Completed',
        score: '500+'
    },
    {
        label: 'Clients Ratings',
        score: '4.9*'
    },
    {
        label: 'Social Media Followers',
        score: '2.5k+'
    }
];

const planList = [
    'Kitchen',
    'Swimming Pool',
    'Laptop friendly workspace',
    '24/7 WiFi',
    'Pet freindly',
    'Air conditioning',
    'Garden Space'
];

const BrandStats = () => {
    return (
        <Container bg= "white" maxW="1000px" marginBottom={'40px'} p={{ base: 4, sm: 10 }}>
            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
                <Stack spacing={6}>
                    <chakra.h1 bgGradient="linear(to-br, black, #15aabf)" bgClip="text" fontSize="40px" lineHeight={1.2} fontWeight="bold">
                      Ameneties
                    </chakra.h1>
                    <Text fontSize="20px" color="black" maxW="480px">
                    The Rusta is located in a quiet place, away from noise. Arambol Beach is 15 minutes walk or 5 minutes by bike. The shops, ATM, vegetable and fruit stalls, cafes, pharmacy, public transport and taxi close by walk.
                    </Text>

                    <Stack spacing={2}>
                        <Text  bgGradient="linear(to-br, black, #15aabf)" bgClip="text" fontSize="25px" fontWeight="500">
                            Why Choose Us?
                        </Text>
                        {planList.map((data, index) => (
                            <HStack key={index} alignItems="center" spacing={4} fontSize="lg">
                                <Icon as={AiFillCheckCircle} w={4} h={4} color="black" />
                                <Text color='black' fontSize="20px">{data}</Text>
                            </HStack>
                        ))}
                    </Stack>
                </Stack>
                <Stack>
                    <SimpleGrid columns={2} spacing={10} pt={8} pl={{ base: 0, md: 10 }} margin="auto 0">
                        {statData.map((data, index) => (
                            <Stack
                                key={index}
                                pl={3}
                                py={1}
                                pr={1}
                                borderLeft="2px solid"
                                borderLeftColor="black"
                                justifyContent="space-between"
                            >
                                <Box fontSize="40" fontWeight="bold" color="black">
                                    {data.score}
                                </Box>
                                <Text bgGradient="linear(to-br,  black, #15aabf)" bgClip="text" fontSize="20">{data.label}</Text>
                            </Stack>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Stack>
        </Container>
    );
};

export default BrandStats;