import {drivewayCleaningData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.drivewayCleaning;
const page = () => {
  return <ServicePageTemplate serviceData={drivewayCleaningData} />;
}

export default page
