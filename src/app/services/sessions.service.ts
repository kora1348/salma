import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Login } from "../views/identity/view/singin/login";

import { SessionReponse } from "./session.response";

@Injectable()

export class SessionService {
    constructor() { }

    login(login : Login): Observable<SessionReponse> {
        return of(
            {
                user: login.user,
                islogged: login.user === 'toto'
            }
        )

    }
}

