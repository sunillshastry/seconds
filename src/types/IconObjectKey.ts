import GeoData from '../schema/GeoData';
import { z } from 'zod';

type IconObjectKey = keyof z.infer<typeof GeoData.shape.address> | string;

export default IconObjectKey;
