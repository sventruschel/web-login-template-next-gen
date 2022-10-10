const dateTimeExpression = async ({ add, now }) => {
  if (!now) {
    let timeStamp = Date.now() / 1000;
    timeStamp = timeStamp + 3600 * add;
    console.log(Math.round(timeStamp).toString());

    return { result: Math.round(timeStamp) };
  }
  let timeStamp = Date.now() / 1000;
  return { result: Math.round(timeStamp) };
};

export default dateTimeExpression;
