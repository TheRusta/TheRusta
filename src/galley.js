import { Text, Image, Box, Stack, Heading } from "@chakra-ui/react";

const Product1 = ({ imageSrc, imageAlt, title, category, price }) => (
   
    <Stack p={{ base: "rem" }}>
        


        <Image w='100vw' borderRadius="20px" objectFit="cover" src={imageSrc} alt={imageAlt} />
        <Text color="teal.600" textTransform="uppercase">
            {/* {category} */}
        </Text>

        <Heading color="teal.300" size="md" textTransform="capitalize">
            {title}
        </Heading>
        <Box>
            {price}
            <Box as="span" color="gray.600" fontSize="sm">

            </Box>
        </Box>
    </Stack>
);

export default Product1;
