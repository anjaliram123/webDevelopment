var faker = require("faker");

console.log(faker.name.findName());

for(var i=0;i<10;i++)
{
    console.log(faker.commerce.productName());
}