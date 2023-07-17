import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment"
import baseUrl from "../config";

class ResponseHeader {
    private static createPath(params: HttpParams): string {
        return baseUrl.createUri(`/response-headers`, params.toString())
    }

    static testResponseHeader(freeform: string) {
        const params = new HttpParams()
            .set('freeform', freeform);
        return this.createPath(params) 
    }
}

export default ResponseHeader;