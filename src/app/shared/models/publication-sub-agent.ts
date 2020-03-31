import { SubAgent } from './sub-agent';

export interface PublicationSubAgent {
    id: string;
    name: string;
    subAgents: SubAgent[];
}
