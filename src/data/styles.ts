import type { ImageMetadata } from 'astro';
import port1 from '../assets/port-1.png';
import port2 from '../assets/port-2.png';
import port3 from '../assets/port-3.png';

export interface TattooStyle {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: ImageMetadata;
}

export const styles: TattooStyle[] = [
    {
        id: 'blackwork',
        name: 'Blackwork',
        slug: 'blackwork',
        description: 'Bold, high-contrast imagery using only black ink. Focusing on texture, depth, and structural integrity.',
        image: port1,
    },
    {
        id: 'fine-line',
        name: 'Fine Line',
        slug: 'fine-line',
        description: 'Delicate, precise linework that offers a sophisticated and subtle aesthetic. Ideal for botanical and architectural motifs.',
        image: port2,
    },
    {
        id: 'minimalism',
        name: 'Minimalism',
        slug: 'minimalism',
        description: 'The art of reduction. Clean lines and simple geometric forms that make a powerful statement through restraint.',
        image: port3,
    },
];
