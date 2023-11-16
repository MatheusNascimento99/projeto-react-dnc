import axios from "axios";

const BASE_URL = "http://localhost:6969"

export class LivrosService{
    static async getLivros(){
        return await axios.get(BASE_URL+'/busca');
    }

    static getLivro(id){
        return axios.get(`${BASE_URL}/livro/${id}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}/cadastro`,body);
    }

    static updateLivro(id,body){
        return axios.put(`${BASE_URL}/atualizar/${id}`,body);
    }

    static deleteLivro(livroId){
        return axios.delete(`${BASE_URL}/apagar/${livroId}`);
    }
    
}