const getErrUsername = (errorMessage) => {
  const match = errorMessage.match(/\{(.*?)\}/);
  if (match) {
    const keyValueString = `{${match[1].replace(/(\w+):/g, '"$1":')}}`;
    const keyValueObject = JSON.parse(keyValueString);
    return `A user with the data "${
      keyValueObject.username ? keyValueObject.username : keyValueObject.email
    }" already exists. Please try another username to sign up.`;
  } else {
    return 'No match found';
  }
};

export default getErrUsername;
