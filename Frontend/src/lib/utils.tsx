import axios from "axios";
import { VolunteerFormData } from "../components/VolunteerFormSection";

// API Initialization
const API_BASE_URL = "http://localhost:8000/";
const apiService = axios.create({ baseURL: API_BASE_URL + "api/" });

// GET Endpoints
export async function getPet(id: number) {
  try {
    const response = await apiService.get(`/pet/?id=${id}`);
    return response.data.pet;
  } catch (error) {
    throw error;
  }
}

export async function getPetImages(id: number) {
  try {
    const response = await apiService.get(`/pet/images/?id=${id}`);
    return response.data.images;
  } catch (error) {
    throw error;
  }
}

export async function getPets() {
  try {
    const response = await apiService.get("/pets/");
    return response.data.pets;
  } catch (error) {
    throw error;
  }
}

export async function getRecommendedPets(id: number) {
  try {
    const response = await apiService.get(`/pets/recommended/?id=${id}`);
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

export async function getShelter(id: number) {
  try {
    const response = await apiService.get(`/shelter/?id=${id}`);
    return response.data.shelter;
  } catch (error) {
    throw error;
  }
}

async function getCsrfToken(): Promise<string> {
  try {
    const response = await apiService.get("/csrf-token/");
    return response.data.csrfToken;
  } catch (error) {
    throw error;
  }
}

export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const response = await apiService.get(
      `/volunteer/check-email/?email=${email}`,
    );
    return response.data.exists;
  } catch (error) {
    throw error; // Unable to check email existence. Should return false?
  }
}

export async function getFeaturedPets(){
  try {
    const response = await apiService.get(`/pets/featured/`);
    return response.data.pets;
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
export async function postVolunteerInformation(formData: VolunteerFormData) {
  try {
    const csrfToken = await getCsrfToken();

    if (!csrfToken) {
      throw new Error("CSRF token is missing or invalid.");
    }

    await apiService.post(
      "/volunteer/",
      { data: formData },
      {
        headers: {
          "X-CSRFToken": csrfToken,
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    throw error;
  }
}

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
