import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const index = () => {
  return (
    <VStack w="full" align="center" bg="gray.900" color="cyan.500">
      <HStack
        w="full"
        maxW="container.sm"
        h="20vh"
        align="center"
        justify="space-between"
      >
        <Text fontWeight="black" fontSize="xl">
          Task Estimator
        </Text>

        <Button variant="outline" colorScheme="cyan" h="16">
          Go Back
        </Button>
      </HStack>

      <VStack w="full" maxW="container.sm" spacing="8">
        <HStack w="full" spacing="8">
          <CustomInput label="Optimistic" />
          <CustomInput label="Realistic" />
          <CustomInput label="Pessimistic" />
        </HStack>

        <Button h="16" alignSelf="flex-end" colorScheme="cyan">
          Calculate
        </Button>

        <VStack
          align="center"
          w="full"
          maxW="container.sm"
          h="full"
          bg="gray.800"
          p="32"
        >
          <VStack w="full" align="center" spacing="0">
            <Text>Estimated Time</Text>
            <Text fontSize="9xl" fontWeight="black">
              1h
            </Text>
          </VStack>

          <Button variant="outline" w="full" h="16" colorScheme="cyan">
            Reset
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default index;

interface CustomInputProps extends NumberInputProps {
  label: string;
}

const CustomInput = ({ label, ...props }: CustomInputProps) => {
  return (
    <VStack align="flex-start" spacing="0" as={FormControl} w="full">
      <FormLabel htmlFor="email">{label}</FormLabel>
      <NumberInput {...props} h="16" w="full">
        <NumberInputField h="full" fontSize="lg" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </VStack>
  );
};
