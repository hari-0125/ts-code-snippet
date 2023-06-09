import express, { Request, Response } from 'express';

const PORT = process.env.PUBLIC_PORT || 4000;

// Initialize application
const app = express();

const getUserService = () => {
  return new Promise<string | null>((resolve) => {
    setTimeout(() => {
      resolve('test')
    }, 2000);
  })
}

const updateUserService = (str: string) => {
  console.log(str)
}

const returnSomeString = (str: string) => {
  return str + Math.random();
}

const returnValue = async (op: string): Promise<string> => {
  let val;

  if (op == '1') {
    val = returnSomeString('ts');
  } else if (op = '2') {
    val = returnSomeString('jojo');
  } else {
    console.log('tsss');
  }

  return val;
};

function calculateArea(width: number, height: number) {
  return width * height;
};

const area: string = calculateArea(5, 10);
console.log(area);

function getPersonName(person): string {
  return person.name;
}

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

const personName = getPersonName(person);
console.log(personName);

app.get('/', async (req: Request, res: Response) => {
  const data = await getUserService();
  updateUserService(data);
  returnValue(data);
  res.send('Hello World');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
