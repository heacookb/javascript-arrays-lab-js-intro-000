const app = "I don't do much."
function destructivelyAppendKitten(name)
{
  kittens.unshift(name);
}
function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten()
{
  kittens.pop();
}
function destructivelyRemoveFirstKitten()
{
  kittens.shift();
}
function appendKitten(name)
{
  var cats = kittens;
  cats = [kittens, ...name];
  return cats;
}
function prependKitten(name)
{
  var cats = kittens;
  cats = [...name, kittens];
  return cats;
}