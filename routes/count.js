//count the words
exports.count = string => {
    const words = string.split(" ").filter(word => word !== "");
    const totalCount = words.length;
    return totalCount;
  };
 