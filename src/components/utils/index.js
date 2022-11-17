const getAverageRgb = async (src) => {
  return new Promise((resolve) => {
    let context = document.createElement("canvas").getContext("2d");
    context.imageSmoothingEnabled = true;

    let img = new Image();
    img.src = src;
    img.crossOrigin = "";

    img.onload = () => {
      context.drawImage(img, 0, 0, 1, 1);
      var i = context.getImageData(0, 0, 1, 1).data.slice(0, 3);
      resolve(
        "#" +
          ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1)
      );
    };
  });
};

export default getAverageRgb;
