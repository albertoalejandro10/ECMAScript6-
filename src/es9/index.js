//Novedades ES9 - Desestructuracion objetos, operador propagacion, .finally, regex(Mejoro su manejo)


//Spread operator
const obj = {
    nombre: 'Alberto',
    edad: 23,
    country: 'VE'
  };
  
  let { nombre, ...addInfo } = obj;
  console.log(`nombre: ${nombre}`);
  console.log(`Informacion adicional: `, addInfo);
  
  let { country, ...nombreYedad } = obj;
  console.log(`nombre and edad: `, nombreYedad);
  
  //Porpagation Properties
  const person = {
    nombre: 'Alberto',
    edad: 23
  };
  
  const personInformation = {
    ...person,
    country: 'VE'
  };
  console.log(`InformacionPersonal: `, personInformation);
  

   //Promise Finally

  const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(newError('Test Error'));
    });
  };
  
  helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));
  

   //Regex

  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2020-08-01');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);

  //Regex + groups

  const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
  const match = regexData.exec('2020-08-01');
  const {year, month, day} = match.groups;
  console.log(year, month, day);
  