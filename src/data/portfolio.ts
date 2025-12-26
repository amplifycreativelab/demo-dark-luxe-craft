import type { ImageMetadata } from 'astro';
import port1 from '../assets/port-1.png';
import port2 from '../assets/port-2.png';
import port3 from '../assets/port-3.png';
import port4 from '../assets/port-4.webp';
import port5 from '../assets/port-5.webp';
import port6 from '../assets/port-6.webp';

export interface PortfolioItem {
    id: string;
    title: string;
    artistId: string;
    styleId: string;
    image: ImageMetadata;
}

export const portfolio: PortfolioItem[] = [
    { id: '1', title: 'Geometric Forearm', artistId: '1', styleId: 'blackwork', image: port1 },
    { id: '2', title: 'Botanical Sleeve', artistId: '2', styleId: 'fine-line', image: port2 },
    { id: '3', title: 'Minimalist Spine', artistId: '3', styleId: 'minimalism', image: port3 },
    { id: '4', title: 'Surrealist Abstract', artistId: '1', styleId: 'blackwork', image: port4 },
    { id: '5', title: 'Delicate Floral', artistId: '2', styleId: 'fine-line', image: port5 },
    { id: '6', title: 'Abstract Arch', artistId: '3', styleId: 'minimalism', image: port6 },
];
