import { z } from 'zod'

export const contactFormSchema = z.object({
    lastName: z.string().nonempty('Wait... you have name right?😥'),
    firstName: z.string().nonempty('Wait... you have name right?😥'),
    email: 
    z.string()
    .email('The given email does not match the email format!❌')
    .nonempty('Wait... you have email right?😥'),
    details: z.string().nonempty('Write your message!💦')
})