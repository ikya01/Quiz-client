import axios from "axios";

const baseURL = "http://localhost:9192/api/courses";

const api = axios.create({
	baseURL
});

export const createCourse = async (course) => {
	try {
		const response = await api.post("/CreateCourse", course);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getAllCourses = async () => {
	try {
		const response = await api.get("/allCourse");
		return response.data;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const updateCourse = async (id, course) => {
	try {
		const response = await api.put(`/${id}`, course);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const getCourseById = async (id) => {
	try {
		const response = await api.get(`/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteCourse = async (id) => {
	try {
		await api.delete(`/${id}`);
	} catch (error) {
		console.error(error);
	}
};
