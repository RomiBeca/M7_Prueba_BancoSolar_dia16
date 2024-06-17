export const handleError = (error) => {
    if (error.code) {
        switch (error.code) {
            //Class 08 — Connection Exception
            case "08P01":
                return {
                    code: 400,
                    msg: 'violacion del protocolo'
                }
            //Class 22 — Data Exception
            case "22P02":
                return {
                    code: 400,
                    ms: 'invalid_text_representation'
                }
            //Class 23 — Integrity Constraint Violation
            case "23502":
                return {
                    code: 400,
                    msg: 'campo obligatorio'
                }
            case "23505":
                return {
                    code: 400,
                    msg: 'el registro ya existe'
                }

            case "42601":
                return {
                    code: 400,
                    msg: 'syntax_error'

                }

            default:
                return {
                    code: 500,
                    msg: 'Fallo postgres'
                }
        }
    }
}