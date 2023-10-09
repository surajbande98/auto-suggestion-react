import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import { Country } from './interfaces/Country.interface';
import { countries } from './countries-data';

const app = express();

app.use(cors());

// sample api routes for testing
app.get('/countries', (req: Request, res: Response) => {
  const query = <string>req.query.query;
  // mocked data..
  const allCountries = <Country[]>countries;

  const result = allCountries.filter((country: Country) => {
    return country.name.toLowerCase().startsWith(query.toLowerCase());
  });

  res.status(200).send(result);
});

// Port Number
const port = 5000;

// Server setup
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
