import { Flex, Grid ,Box,Text} from "@chakra-ui/react";
import Product1 from "./galley";
import { products } from "./muck.js";

export default function Product() {
    return (
        
        <Flex
            direction="column"
            justifyContent="center"
            maxW={{ xl: "1000px" }}
            mt="40px"
            ml="0px"
            mb="40px"
            minH="0"
        >
              <Box color= "#15aabf" fontSize="40px" fontWeight="bold" mb={20} textAlign="center">
               
            
        <Text >Photos</Text>
    </Box>
            <Grid
                w="100vw"
                gridGap="2"
                gridTemplateColumns="repeat( auto-fit, minmax(500px, 1fr) )"
            >
                {products.map((p) => (
                    <Product1 key={p.id} {...p} />
                ))}
            </Grid>
        </Flex>
    );
}