import { cn } from "@/lib/utils";
import { FieldErrors, Path, UseFormRegister,FieldValues } from "react-hook-form";


interface FormFieldProps<T extends FieldValues>{
  id: string;
  type?: string;
  disabled?: boolean;
  placeholder: string;
  label?: string;
  inputClassNames?: string;
  register: UseFormRegister<T>;
  errors:FieldErrors;
}

const FormField = <T extends FieldValues>({ id, type, disabled, placeholder, label, inputClassNames, register, errors }: FormFieldProps<T>) => {
  
  const message=errors[id] && errors[id]?.message as string 
  return (
    <div>
      {label && <span className="block text-sm">{ label}</span>}
      <input
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        {...register(id as Path<T>)}
        className={cn("w-full p-3 my-2 outline-none rounded-md disabled:opacity-70 disabled:cursor-not-allowed border border-slate-300 dark:border-slate-700",errors[id] && "border-rose-400", inputClassNames)}

      
      />
      <p className="text-red-500 text-sm">{ message}</p>
    </div>
  );
};

export default FormField;