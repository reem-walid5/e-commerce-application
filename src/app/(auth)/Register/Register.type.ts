import * as zod from 'zod'
import { registerScema } from './RegisterScema'
export type registerObjectType =zod.infer<typeof registerScema>
