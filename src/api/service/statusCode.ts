import { HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment"
import baseUrl from "../config";

export class StatusCode {
    private static createPath(statusCode: number): string {
        return baseUrl.createUri(`/status/${statusCode}`);  
    }

    static testStatusCode(statusCode: number) {
        return this.createPath(statusCode);
    }
}
