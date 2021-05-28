import _ from "lodash";

export const getOptions = (number, prefix = "Skill ") =>
  _.times(number, index => ({
    key: index,
    text: `${prefix}${index}`,
    value: index
  }));

export function checkIsValidFile(files) {
    const filesize = files.size;
  return typeof files.name != "undefined" && filesize <= 16000;
}
