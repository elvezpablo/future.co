export type Exercise = {
    name: string;
    id: string;
    description: string | null;
    muscle_groups: string | null;
    equipment_required: string | null;
    movement_patterns: string;
    synonyms: string;
    is_alternating: boolean;
    side: string;
    // TODO: note video not available on all nodes TS for the win
    video?: {
        url: string,
        is_flipped: boolean
    },
    audio: {
        url: string
    }
} 

