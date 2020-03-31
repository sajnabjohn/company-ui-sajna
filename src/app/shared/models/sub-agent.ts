import { CopyType } from './copy-type';

export interface SubAgent {
    code: string;
    name: string;
    edition: string;
    unit: string;
    copyTypes: CopyType[];
}
