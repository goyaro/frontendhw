const faker = require("faker");

const randomId = () => {
  return Math.floor(Math.random() * 3) + 1;
};

function generateDoctors() {
  const doctors = [];
  for (let i = 1; i < 21; i++) {
    doctors.push({
      id: i,
      categoryId: randomId(),
      name: `Dr. ${faker.name.firstName()} ${faker.name.lastName()}`,
      facility: `${faker.company.companyName()} Hospital`,
      price: faker.finance.amount(1000, 10000, 2, "$"),
      bio: faker.lorem.sentences(),
      picture: faker.image.avatar()
    });
  }
  return doctors;
}

const doctors = generateDoctors();

const priceRange = () => {
  return {
    lowest: faker.finance.amount(1000, 3000, 2, "$"),
    highest: faker.finance.amount(5000, 10000, 2, "$")
  };
};

const categories = [
  {
    id: 1,
    name: "Rhinoplasty",
    lowestPrice: priceRange().lowest,
    highestPrice: priceRange().highest,
    numDocs: doctors.filter(d => d.categoryId === 1).length
  },
  {
    id: 2,
    name: "Hemorrhoidectomy",
    lowestPrice: priceRange().lowest,
    highestPrice: priceRange().highest,
    numDocs: doctors.filter(d => d.categoryId === 2).length
  },
  {
    id: 3,
    name: "Cholecystectomy",
    lowestPrice: priceRange().lowest,
    highestPrice: priceRange().highest,
    numDocs: doctors.filter(d => d.categoryId === 3).length
  }
];

module.exports = { doctors, categories };
