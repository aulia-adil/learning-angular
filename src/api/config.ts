import { environment } from "src/environments/environment"

const baseUrl = {
    createUri: (path: string, params?: string) => {
        let uri: string = environment.apiUrl + path
        if (params) {
            uri = uri + "?" + params;
        }
        return uri;
    }
}

export default baseUrl