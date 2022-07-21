let is_ok = true;

const CustomFetch = (task) => {
  return new Promise((resolve, reject) => {
        if (is_ok) {
            resolve (task)
        } else {
            reject("error")
        }
  });
}

export default CustomFetch