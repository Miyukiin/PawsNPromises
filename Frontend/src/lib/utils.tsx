import axios from "axios";

// API Initialization
const API_BASE_URL = "http://localhost:8000/api/";
const apiService = axios.create({ baseURL: API_BASE_URL });

// GET Endpoints
// should return
// { id: 1, name: "Rexar", type: "Puppy", breed: "Doberman", imageSrc: "/image/default-image.png" },
export async function getPets() {
  try {
    const response = await apiService.get("/pets/");
    return response.data.pets;
  } catch (error) {
    throw error;
  }
}

export async function getStatic(payload: string) {
  try {
    const response = await apiService.get(`/static/?name=${payload}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export async function sampleGet() {
  try {
    const response = await apiService.get("/test/");
    return response.data;
  } catch (error) {
    throw error;
  }
}

// POST Endpoints
interface SamplePayload {
  name: string;
}
export async function samplePost(payload: SamplePayload) {
  try {
    await apiService.post("/test/", payload);
  } catch (error) {
    throw error;
  }
}

// PUT Endpoints
export async function samplePut(id: number, payload: SamplePayload) {
  try {
    await apiService.put(`/test/${id}/`, payload);
  } catch (error) {
    throw error;
  }
}

// DELETE Endpoints
export async function sampleDelete(id: number) {
  try {
    await apiService.delete(`/test/${id}/`);
  } catch (error) {
    throw error;
  }
}
