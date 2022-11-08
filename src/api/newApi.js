import adminAxios from "./adminAxios";

export const newApi = {
    getAllNew: () => {
        return adminAxios.get("/news/all");
    },
    getNewById: (id) => {
        return adminAxios.get(`/news/${id}`);
    },
    addNews: async (news) => {
        try {
            const res = await adminAxios.post(
                `/news/add`
                , news);
            return res;
        } catch (err) {
            throw err;
        }
    },
    updateNews: async (id, news) => {
        try {
            console.log(id, news);
            const res = await adminAxios.post(`news/update/${id}`, news);
            return res      
        } catch (error) {
            
        }
    }
};
