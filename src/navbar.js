import {
    Box,
    Image,
    Flex,
    Avatar,
    HStack,
    Button,
    Text,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack,
    Icon,
    IconButton,
    useDisclosure,
    useColorModeValue
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiTwotoneThunderbolt } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { MdTimeline } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { IconType } from 'react-icons';

const navLinks = [
    { name: 'About', path: 'infopage' },
    // { name: 'Blog', path: '#' },
    { name: 'Gallery', path: 'gallery' },

];

// const dropdownLinks = [
//     {
//         name: 'Old Goa',
//         path: '#',
//         icon: MdTimeline
//     },
//     {
//         name: 'South Goa',
//         path: '#',
//         icon: AiTwotoneThunderbolt
//     },
//     {
//         name: 'North Goa',
//         path: '#',
//         icon: BsBook
//     }
// ];

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const menuProps = {
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue("blue.500")
    };

    return (
        <Box py="10px" bg={"white"} px={4} boxShadow="lg" width="100%">
            <Flex h={8} alignItems="center" justifyContent="" maxW={800} mx="auto">
                <IconButton
                    size="md"
                    icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                    aria-label="Open Menu"
                    display={['inherit', 'inherit', 'none']}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack margin="0 auto" spacing={36} alignItems="center">


                    <Box

                        as={Link}
                        href="rasta" >
                        <Image
                            boxSize={'100px'}
                            alt={'Login Image'}
                            objectFit={'contain'}
                            src={
                                'asset/ruslogo.jpeg'
                            }
                        />
                    </Box>
                    <HStack as="nav" textColor={'#5d4848'} spacing={36} display={{ base: 'none', md: 'flex' }} alignItems="center">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} {...link} onClose={onClose} />
                        ))}

                        <Button
                            as={Link}
                            href="contact"
                            color="white"
                            variant="solid"
                            size="md"
                            rounded="md"
                            mb={{ base: 2, sm: 0 }}
                            lineHeight={1}
                            bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                            _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)' }}
                        >
                            Book Now
                        </Button>

                    </HStack>
                </HStack>

                {/* <IconButton aria-label="Color Switcher" icon={<FiSun />} /> */}
            </Flex>

            {/* Mobile Screen Links */}
            {
                isOpen ? (
                    <Box pb={4} display={['inherit', 'inherit', 'none']}>
                        <Stack as="nav" spacing={2}>
                            {navLinks.map((link, index) => (
                                <NavLink key={index} {...link} onClose={onClose} />
                            ))}
                        </Stack>
                    </Box>
                ) : null
            }
        </Box >
    );
}



const NavLink = ({ name, path, onClose }) => {
    const link = {
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('blue.500', 'blue.200')
    };

    return (
        <Link
            href={path}
            px={6}
            py={1}
            lineHeight="inherit"
            rounded="md"
            _hover={{
                textDecoration: 'none',
                bg: link.bg,
                color: link.color
            }}
            onClick={() => onClose()}
        >
            {name}
        </Link>
    );
};

// Dropdown MenuLink Component


const MenuLink = ({ name, path, icon, onClose }) => {
    return (
        <Link href={path} onClick={() => onClose()}>
            <MenuItem _hover={{ color: 'blue.400', bg: useColorModeValue('gray.200', 'gray.700') }}>
                <HStack>
                    <Icon as={icon} size={18} color="blue.400" />
                    <Text>{name}</Text>

                </HStack>
            </MenuItem>
        </Link>
    );
};