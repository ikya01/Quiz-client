import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:9192/api/results"
});

export const saveResultToDatabase = async (resultData) => {
    try {
        await api.post("/save", resultData);
        alert("Résultat enregistré avec succès !");
    } catch (error) {
        console.error("Erreur lors de l'enregistrement du résultat :", error);
        alert("Erreur lors de l'enregistrement du résultat. Veuillez réessayer.");
    }
};



export const getAllResultsFromDatabase = async () => {
    try {
        const response = await api.get("/");
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des résultats :", error);
        throw error;
    }
};

export const deleteResultFromDatabase = async (id) => {
    try {
        await api.delete(`/${id}`);
        console.log("Résultat supprimé avec succès !");
    } catch (error) {
        console.error("Erreur lors de la suppression du résultat :", error);
        throw error;
    }
};



