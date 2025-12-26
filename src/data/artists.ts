import type { ImageMetadata } from 'astro';
import artist1 from '../assets/artist-1.png';
import artist2 from '../assets/artist-2.png';
import artist3 from '../assets/artist-3.png';

export interface Artist {
    id: string;
    name: string;
    slug: string;
    specialty: string;
    experience: string;
    bio: string;
    image: ImageMetadata;
}

export const artists: Artist[] = [
    {
        id: '1',
        name: 'Elias Vance',
        slug: 'elias-vance',
        specialty: 'Blackwork / Surrealism',
        experience: '12 Years',
        bio: 'Specializing in high-contrast blackwork and surrealist forms. Elias focuses on how ink interacts with the natural flow of the body.',
        image: artist1,
    },
    {
        id: '2',
        name: 'Sara Kae',
        slug: 'sara-kae',
        specialty: 'Fine Line / Botanicals',
        experience: '8 Years',
        bio: 'Sara brings a delicate touch to botanical and architectural forms. Her work is characterized by precision and restraint.',
        image: artist2,
    },
    {
        id: '3',
        name: 'Julian Noir',
        slug: 'julian-noir',
        specialty: 'Dark Minimalism',
        experience: '15 Years',
        bio: 'The founder of INK//RITUAL. Julian\'s work is architectural, bold, and strictly minimalist.',
        image: artist3,
    },
];
