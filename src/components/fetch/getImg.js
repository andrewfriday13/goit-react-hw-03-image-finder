
export const getImg =(serchImg, page)=>{

  const BASE_URL =`https://pixabay.com/api/`
  const KEY_API = `33041126-3ffd63b5fde94b48036de795f`

 return fetch(`${BASE_URL}?key=${KEY_API}&q=${serchImg}&page=${page}&per_page=12`)

}

