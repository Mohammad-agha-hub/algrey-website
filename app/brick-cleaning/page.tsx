import {brickCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

import { serviceMetadata } from "@/components/serviceMetadata";

export const metadata = serviceMetadata.brickCleaning;

const page = () => {
  return <ServicePageTemplate serviceData={brickCleaningData} />;
}

export default page
