function setTextToElem(id: string, text: string | number) {
  const elem = document.getElementById(id);
  if (elem) elem.textContent = text.toString();
}

export default setTextToElem;
