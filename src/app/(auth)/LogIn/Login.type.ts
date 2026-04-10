import * as zod from 'zod'
import { loginScema } from './LoginScema'
export type loginObjectType =zod.infer<typeof loginScema>
