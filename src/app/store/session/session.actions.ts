import { SessionReponse } from "../../services/session.response";

export class SessionAction {
    static readonly type = '[login] connexion';
    constructor(public session: SessionReponse ) { }
}
