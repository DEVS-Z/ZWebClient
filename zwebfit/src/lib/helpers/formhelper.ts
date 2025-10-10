export class formHelper{
    constructor(){

    }
    getValues<T extends Record<string, any>>(form: FormData): Partial<T> {
        const result = {} as Partial<T>;
        
        for (const [key, value] of form.entries()) {
            (result as any)[key] = value;
        }
        
        return result;
    }

}