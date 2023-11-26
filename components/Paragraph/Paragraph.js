import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({
  textAlign = "left",
  content,
  textColor,
  classNames,
  styles,
}) => {
  return (
    <p
      className={`${classNames}`}
      style={styles}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};
