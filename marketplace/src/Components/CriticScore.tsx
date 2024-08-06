import { Badge, Text, VStack } from "@chakra-ui/react";

interface Props {
  score: number;
  numReviews: number;
}

const CriticScore = ({ score, numReviews }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <>
      <VStack>
        <Badge
          marginBottom="-5px"
          fontSize="14px"
          paddingX={2}
          borderRadius={10}
          colorScheme={color}
        >
          {score}
        </Badge>
        <Text fontSize="xs">
          <i>({numReviews} reviews)</i>
        </Text>
      </VStack>
    </>
  );
};

export default CriticScore;
