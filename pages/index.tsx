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
import React, { useEffect, useState } from "react";
import { Header } from "../src/components/Header";

const initialValues = {
  op: 0,
  real: 0,
  pes: 0,
};

const index = () => {
  const [estimates, setEstimates] = useState(initialValues);

  const [result, setResult] = useState(0);

  useEffect(() => {
    (() => {
      const estimate = (estimates.pes + estimates.real * 4 + estimates.op) / 6;
      setResult(estimate);
    })();
  }, [estimates]);

  const handleReset = () => {
    setEstimates(initialValues);
  };

  return (
    <VStack
      w="full"
      h="100vh"
      align="center"
      spacing="0"
      bg="gray.900"
      color="cyan.500"
    >
      <Header />

      <VStack w="full" h="80vh" maxW="container.sm" spacing="8">
        <HStack w="full" spacing="8">
          <CustomInput
            label="Optimistic"
            value={estimates.op}
            onChange={(val) => setEstimates({ ...estimates, op: +val })}
          />
          <CustomInput
            label="Realistic"
            value={estimates.real}
            onChange={(val) => setEstimates({ ...estimates, real: +val })}
          />
          <CustomInput
            label="Pessimistic"
            value={estimates.pes}
            onChange={(val) => setEstimates({ ...estimates, pes: +val })}
          />
        </HStack>

        <VStack
          align="center"
          w="full"
          maxW="container.sm"
          bg="gray.800"
          p="16"
          objectFit="contain"
        >
          <VStack w="full" align="center" spacing="0">
            <Text>Estimated Time</Text>
            <Text fontSize="9xl" fontWeight="black">
              {`${result.toFixed(2)}h`}
            </Text>
          </VStack>

          <Button
            variant="outline"
            w="full"
            h="16"
            colorScheme="cyan"
            onClick={handleReset}
          >
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
      <NumberInput
        min={0}
        max={24}
        precision={2}
        step={0.25}
        h="16"
        w="full"
        {...props}
      >
        <NumberInputField h="full" fontSize="lg" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </VStack>
  );
};
