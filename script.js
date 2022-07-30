const header = document.querySelectorAll("h1");

const refresh = function (val) {
  console.log(val);
};

function declaration(string) {
  console.log(string);
}

const add = (val) => val + 23;

refresh(header);
add(12);
declaration("Welcome to redux world");
