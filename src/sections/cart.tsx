import {
  Heading,
  HStack,
  VStack,
  Image,
  AspectRatio,
  Text,
  Divider,
  Stack,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={6}
      align="flex-start"
      bg={bgColor}
    >
      <VStack alignItems="flex-start" spacing={3} >
        <Heading size="2xl">Your cart</Heading>
        <Text id="underline">
          ThankYou for Shopping With Us.{' '}
          <Button onClick={toggleColorMode} variant="link" colorScheme="red">
            Shop With Us Again!
          </Button>
        </Text>
      </VStack>
      <HStack
        spacing={{ base: 3, md: 6 }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        w="full"
      >
        <AspectRatio ratio={1} w={24} >
          <Image src="/images/laptop.jpeg" alt="Laptop" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">LapTop</Heading>
            <Text color={secondaryTextColor}>Laptop96587</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $720.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$720.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$9.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$31.80</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$761.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
