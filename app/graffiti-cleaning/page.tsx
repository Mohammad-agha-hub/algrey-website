import {graffitiRemovalData} from '@/components/allServiceData'
import ServicePageTemplate from '@/components/ServicePageTemplate'

import { serviceMetadata } from "@/components/serviceMetadata";
export const metadata = serviceMetadata.graffitiRemoval;
const page = () => {
  return <ServicePageTemplate serviceData={graffitiRemovalData} />;
}

export default page
