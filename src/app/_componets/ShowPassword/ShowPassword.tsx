"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

type ShowPasswordProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
};

const ShowPassword = <T extends FieldValues>({
  control,
  name,
}: ShowPasswordProps<T>) => {
    
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="md:text-[17px] font-normal">
              password:
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  {...field}
                
                  onCopy={(e) => e.preventDefault()}
                />
                <button
                type="button"
                  className="absolute right-5 cursor-pointer top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <i className="fa-regular fa-eye"></i>
                  ) : (
                    <i className="fa-regular fa-eye-slash"></i>
                  )}
                </button>
              </div>
            </FormControl>
            <FormMessage />
            <FormDescription></FormDescription>
          </FormItem>
        )}
      />
    </div>
  );
};

export default ShowPassword;
