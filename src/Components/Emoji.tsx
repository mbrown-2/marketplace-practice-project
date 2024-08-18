import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/emoji-ratings/bulls-eye.webp";
import thumbsUp from "../assets/emoji-ratings/thumbs-up.webp";
import meh from "../assets/emoji-ratings/meh.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // Index signature to compiler.
  // Saying: any number of keys each of type number - mapping to the Chakra-UI ImageProps component.
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
