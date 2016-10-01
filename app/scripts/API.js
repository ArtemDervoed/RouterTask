
export const addData = (index, data) => {
  localStorage.setItem(index.toString(), JSON.stringify(data));
};
export const removeData = index => {
  localStorage.removeItem(index);
};
export const clearAllData = () => {
  localStorage.clear();
};
export const getItem = index => {
  return JSON.parse(localStorage.getItem(localStorage.key(index)));
};
export const setContentItem = (id, newContent) => {
  const obj = JSON.parse(localStorage.getItem(id));
  obj.data = newContent;
  localStorage.setItem(id, JSON.stringify(obj));
};
export const getAllStorage = () => {
  const storage = [];
  for (let i = 0; i < localStorage.length; i++) {
    storage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  return storage;
};
export const getLengthStorage = () => {
  return localStorage.length;
};
export const setPlayer = (id, newContent) => {
  const obj = JSON.parse(localStorage.getItem(id));
  obj.player = newContent;
  localStorage.setItem(id, JSON.stringify(obj));
};
export const setSong = (id, newContent) => {
  const obj = JSON.parse(localStorage.getItem(id));
  obj.song = newContent;
  localStorage.setItem(id, JSON.stringify(obj));
};
export const setAlbum = (id, newContent) => {
  const obj = JSON.parse(localStorage.getItem(id));
  obj.album = newContent;
  localStorage.setItem(id, JSON.stringify(obj));
};
export const setReliseDate = (id, newContent) => {
  const obj = JSON.parse(localStorage.getItem(id));
  obj.reliseDate = newContent;
  localStorage.setItem(id, JSON.stringify(obj));
};
