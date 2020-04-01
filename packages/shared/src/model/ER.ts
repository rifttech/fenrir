import Schema from "./Schema";

/**
 * ER Diagram model
 */
export default interface ER {
    /**
     * Unique Identifier of model
     */
    uuid: string,
    /**
     * Name of ERD
     */
    name: string,
    /**
     * Description of ERD
     */
    description: string,
    /**
     * Person who creates ERD
     */
    author: string,
    /**
     * List of developers that making changes at this ERD
     */
    developers: string[],

    schemas: Schema[]
}
