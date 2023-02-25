const item = document.querySelectorAll('.item');
console.log('Number of categories:', item.length);

item.forEach(value => {
  console.log('Category:', value.firstElementChild.textContent);
  const elem = value.lastElementChild;
  console.log('Elements:', elem.children.length);
});