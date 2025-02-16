import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "ایمیل الزامی است!" })
    .min(1, { message: "ایمیل الزامی است!" })
    .email({ message: "فرمت ایمیل نامعتبر است!" }),
  password: z
    .string({ required_error: "رمز عبور الزامی است!" })
    .min(6, { message: "رمز عبور باید حداقل ۶ کاراکتر باشد!" }),
});

export type LoginType = z.infer<typeof LoginSchema>;
