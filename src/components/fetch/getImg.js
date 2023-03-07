
export const getImg =(serchImg)=>{

  const BASE_URL =`https://pixabay.com/api/`
  const KEY_API = `33041126-3ffd63b5fde94b48036de795f`

 return fetch(`${BASE_URL}?key=${KEY_API}&q=${serchImg}&per_page=12&id=`)

}

