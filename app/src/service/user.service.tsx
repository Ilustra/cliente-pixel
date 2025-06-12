import { API_1 } from "../config/api";
import useCrud from "../crud/crud";
import { getAPIClient } from "../http/index.axios";

export const useService =()=>{
    const baseUrl = API_1+'/user';
    const httpClient = getAPIClient();
    const crud = useCrud<any, any>(httpClient, baseUrl);

    return {
        ...crud,
    }
}