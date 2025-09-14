const createImage = (prompt) => {
  const queryObject = {
    prompt: prompt,
    model: "gpt-image-1",
    n: 5,
    output_format: "png",
    quality: "high",
  };
};
