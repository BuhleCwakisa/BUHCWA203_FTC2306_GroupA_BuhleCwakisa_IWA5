const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

//The following variables were under the if statements 
//the customers and currency variables were not declared using let

let customers = 1;
const location = 'RSA';
let currency = null;

/* The if statement calculating the shipping cost of the "RSA" was using the wrong comparison operator('===' 
instead of '=' ) assigning the shipping and currency variable*/

/*The if statement calculating the shipping cost of the 'NAM' did not have the brackets nor the curly brackets
and it was under the RSA if statement making the code to give us a wrong output */ 

if (location === 'NAM') {
    shipping = 600;
  } else {
    shipping = 800;
  }

if (location === 'RSA') {
  shipping = 400;
  currency = 'R';
}
// The following items where not declared using the "const" declaration
// The toys variable used a hyphen instead of a "="
// The NONE_SELECTED variable was inbetween quotes making it a string 
// The batteries variable did not have "=" 

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

//The following condition had a logical operator "&&" but it did not need one and it also had a caclShipping variable that was'nt declared
//

if (shoes + batteries + pens + shirts > 1000) {
  if (location === 'NAM' && customers < 2) {
    if (location === 'RSA') {
      shipping = 0;
    }
  }
}

//The was brackets closing the shipping and customers variables making the if statement to contain a error  

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}
//The toys variable was not added

location === 'NK' ? console.log(BANNED_WARNING) : console.log('Price: ', currency,toys + shoes + batteries + pens + shirts + shipping );
