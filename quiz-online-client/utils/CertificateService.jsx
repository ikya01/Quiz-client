import axios from "axios";
 
export const api = axios.create({
    baseURL: "http://localhost:9192/api/certificates"
});

export const saveCertificateToDatabase = async (certificateData) => {
    try {
        await api.post("/save", certificateData);
        alert("Certificat enregistré avec succès !");
    } catch (error) {
        console.error("Erreur lors de l'enregistrement du certificat :", error);
        alert("Erreur lors de l'enregistrement du certificat. Veuillez réessayer.");
    }
};

export const getAllCertificates = async () => {
    try {
        const response = await api.get("/all");
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des certificats :", error);
        return null;
    }
};
