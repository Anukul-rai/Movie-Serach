const API_KEY = 'c989007193c643c3f55db7014468e3bc';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchApi = async () => {
    try {
        const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setDisplay(data);
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
