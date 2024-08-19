import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const limit = 300;

  if (!text) return null;
  if (text.length <= limit) return <Text>{text}</Text>;

  const summary = isExpanded ? text : text.substring(0, limit) + "...";
  const buttonText = isExpanded ? "Show Less" : "Read More";

  return (
    <>
      <Text>{summary}</Text>
      <Button
        size="xs"
        fontWeight={"bold"}
        colorScheme="purple"
        onClick={() => setExpanded(!isExpanded)}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default ExpandableText;

/* 
<Text>{isExpanded ? text : text.substring(0, limit) + "..."}</Text>
      <Button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
*/
