// data/riasec.ts

export type RiasecDimension = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export type RiasecResponseType = 'boolean' | 'likert';

export interface RiasecQuestion {
    id: string;                 // stable ID
    order: number;              // display order
    text: string;               // prompt
    dimension: RiasecDimension; // which RIASEC factor this item maps to
    weight?: number;            // default 1.0
    responseType?: RiasecResponseType; // default 'boolean'
    version?: number;           // questions version
    active?: boolean;           // for future toggling
}

/**
 * Versioned RIASEC questions (v1).
 * Response model: boolean (Agree = true, Disagree = false).
 * Weight defaults to 1.0.
 */
export const RIASEC_QUESTIONS_V1: RiasecQuestion[] = [
    // Realistic (R)
    { id: 'R1', order: 1, text: 'I enjoy fixing or building things with my hands.', dimension: 'R', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'R2', order: 2, text: 'I like working with tools, machines, or mechanical systems.', dimension: 'R', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'R3', order: 3, text: 'I prefer practical tasks over theoretical discussions.', dimension: 'R', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'R4', order: 4, text: 'I enjoy outdoor or physical activities as part of work.', dimension: 'R', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'R5', order: 5, text: 'I feel comfortable troubleshooting equipment problems.', dimension: 'R', weight: 1, responseType: 'boolean', version: 1, active: true },

    // Investigative (I)
    { id: 'I1', order: 6, text: 'I enjoy solving complex problems or puzzles.', dimension: 'I', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'I2', order: 7, text: 'I like analyzing data to discover patterns or insights.', dimension: 'I', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'I3', order: 8, text: 'I prefer working on tasks that require research and reasoning.', dimension: 'I', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'I4', order: 9, text: 'I am curious about how things work at a deeper level.', dimension: 'I', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'I5', order: 10, text: 'I enjoy learning new scientific or technical concepts.', dimension: 'I', weight: 1, responseType: 'boolean', version: 1, active: true },

    // Artistic (A)
    { id: 'A1', order: 11, text: 'I like creating or designing things (art, writing, music, UI, etc.).', dimension: 'A', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'A2', order: 12, text: 'I enjoy work that allows self-expression and originality.', dimension: 'A', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'A3', order: 13, text: 'I prefer unstructured tasks where I can be creative.', dimension: 'A', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'A4', order: 14, text: 'I like brainstorming new ideas and experimenting with styles.', dimension: 'A', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'A5', order: 15, text: 'I enjoy activities like drawing, composing, or crafting.', dimension: 'A', weight: 1, responseType: 'boolean', version: 1, active: true },

    // Social (S)
    { id: 'S1', order: 16, text: 'I enjoy helping, teaching, or supporting other people.', dimension: 'S', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'S2', order: 17, text: 'I like collaborating in teams and building relationships.', dimension: 'S', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'S3', order: 18, text: 'I feel energized by coaching, mentoring, or facilitating groups.', dimension: 'S', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'S4', order: 19, text: 'I prefer roles that involve communication and empathy.', dimension: 'S', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'S5', order: 20, text: 'I enjoy solving people-focused problems.', dimension: 'S', weight: 1, responseType: 'boolean', version: 1, active: true },

    // Enterprising (E)
    { id: 'E1', order: 21, text: 'I enjoy leading initiatives and making decisions.', dimension: 'E', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'E2', order: 22, text: 'I like persuading or influencing others toward a goal.', dimension: 'E', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'E3', order: 23, text: 'I’m comfortable taking calculated risks to achieve results.', dimension: 'E', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'E4', order: 24, text: 'I enjoy negotiating, pitching, or presenting ideas.', dimension: 'E', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'E5', order: 25, text: 'I like setting targets and driving toward ambitious outcomes.', dimension: 'E', weight: 1, responseType: 'boolean', version: 1, active: true },

    // Conventional (C)
    { id: 'C1', order: 26, text: 'I enjoy organizing information, files, or processes.', dimension: 'C', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'C2', order: 27, text: 'I prefer clear procedures, checklists, and structured tasks.', dimension: 'C', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'C3', order: 28, text: 'I’m diligent about accuracy and following rules.', dimension: 'C', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'C4', order: 29, text: 'I like working with spreadsheets, records, or data entry.', dimension: 'C', weight: 1, responseType: 'boolean', version: 1, active: true },
    { id: 'C5', order: 30, text: 'I’m satisfied by completing routine tasks efficiently.', dimension: 'C', weight: 1, responseType: 'boolean', version: 1, active: true },
];

/**
 * Convenience export for current active version.
 */
export const RIASEC_QUESTIONS = RIASEC_QUESTIONS_V1;

/**
 * Optional: simple type to store answers in local state.
 * For boolean questions, `true` = Agree/Yes, `false` = Disagree/No.
 */
export type RiasecAnswerMap = Record<string, boolean>;