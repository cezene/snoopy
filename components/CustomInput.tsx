import React from "react";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  control: Control<z.infer<typeof formSchema>>;
  minLength?: number;
  maxLength?: number;
}

const CustomInput = ({
  name,
  label,
  placeholder,
  control,
  minLength,
  maxLength,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item !mt-3">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                placeholder={placeholder}
                minLength={minLength}
                maxLength={maxLength}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message !mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
