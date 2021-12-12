import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':  'b62a1b3037msh907e060d967f7eep1db6dcjsn1773b2e185f4'
    //   process.env.NEXT_PUBLIC_RAPID_API_KEY
    },
  });
    
  return data;
}