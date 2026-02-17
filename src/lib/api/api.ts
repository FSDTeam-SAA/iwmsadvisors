import axios from "axios";



const url =process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";


export async function getServices(){
    try{
       const data=await axios.get(`${url}/service-page`);
       return data.data;
    }catch(error){
        throw new Error((error as Error).message || "Failed to fetch services");
    }
}
export async function getSingleServices(id: string){
    try{
       const data=await axios.get(`${url}/service-page/${id}`);
       return data.data;
    }catch(error){
        throw new Error((error as Error).message || "Failed to fetch services");
    }
}

export async function getRealEstate() {
    try {
        const data = await axios.get(`${url}/real-state`);
        return data.data;
    } catch (error) {
        throw new Error((error as Error).message || "Failed to fetch real estate facilities");
    }
}

export async function getBlogs() {
    try {
        const data = await axios.get(`${url}/blog`);
        return data.data;
    } catch (error) {
        throw new Error((error as Error).message || "Failed to fetch blogs");
    }
}


// case CaseStudyCard

export async function getCaseStudies() {
    try {
        const data = await axios.get(`${url}/case-study`);
        return data.data;
    } catch (error) {
        throw new Error((error as Error).message || "Failed to fetch case studies");
    }
}
export async function getSingleCaseStudy(id: string) {
    try {
        const data = await axios.get(`${url}/case-study/${id}`);
        return data.data;
    } catch (error) {
        throw new Error((error as Error).message || "Failed to fetch single case study");
    }
}

export async function postContact(formData: FormData) {
    try {
        const data = await axios.post(`${url}/contact`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return data.data;
    } catch (error) {
        throw new Error((error as Error).message || "Failed to send message");
    }
}

