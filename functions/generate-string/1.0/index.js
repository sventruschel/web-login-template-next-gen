const generateString = async ({length}) => {
    let result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length.toString(); i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    console.log(result)
    return {result};
}
  
export default generateString;