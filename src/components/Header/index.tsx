import { HStack, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
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
    </HStack>
  );
};
