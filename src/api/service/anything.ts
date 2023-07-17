import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment"
import baseUrl from "../config";

class Anything {
    private static createPath(anyString: string): string {
        return baseUrl.createUri(`/anything/${anyString}`)
    }

    static testAnything(anything: string) {
        return this.createPath(anything) 
    }
}

export default Anything;