export class FormHelper {
  constructor() {}

  getValues<T extends Record<string, any>>(
    form: FormData,
    keyMap?: Record<string, keyof T>
  ): Partial<T> {
    const result = {} as Partial<T>;

    for (const [key, value] of form.entries()) {
      const targetKey = keyMap?.[key] ?? (key as keyof T);

      if (targetKey) {
        let parsedValue: any = value;

        // Intentar convertir automáticamente si el valor es string
        if (typeof value === "string") {
          if (value === "true" || value === "false") {
            parsedValue = value === "true";
          } else if (!isNaN(Number(value)) && value.trim() !== "") {
            parsedValue = Number(value);
          }
        }

        result[targetKey] = parsedValue;
      }
    }

    return result;
  }
}
