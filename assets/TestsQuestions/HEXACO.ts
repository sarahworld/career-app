// assets/TestsQuestions/HEXACO.ts

export type HexacoDimension = 'H' | 'E' | 'X' | 'A' | 'C' | 'O';
export type HexacoResponseType = 'likert'; // 1–5 scale

export interface HexacoQuestion {
    id: string;                  // stable ID
    order: number;               // display order (1..60)
    text: string;                // prompt
    dimension: HexacoDimension;  // HEXACO factor
    reverse?: boolean;           // reverse-scored item
    weight?: number;             // default 1.0
    responseType?: HexacoResponseType; // default 'likert'
    version?: number;            // questionnaire version
    active?: boolean;            // enable/disable without removing
}

/**
 * Versioned HEXACO (v1) — 60 items, 10 per factor.
 * Response: Likert 1–5 (e.g., 1 = Strongly Disagree ... 5 = Strongly Agree).
 * reverse=true indicates reverse scoring for the item.
 */
export const BASE_QUESTIONS: HexacoQuestion[] = [
    // Honesty–Humility (H) — 10
    { id: '',  order: 1,  text: 'I wouldn’t use flattery to get a raise or promotion at work.', dimension: 'H', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'H2',  order: 2,  text: 'I would not cheat even if I knew I would get away with it.', dimension: 'H', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'H3',  order: 3,  text: 'I am not interested in swindling people out of their money.', dimension: 'H', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'H4',  order: 4,  text: 'I would like to be seen as rich and important.', dimension: 'H', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'H5',  order: 5,  text: 'I feel entitled to special treatment.', dimension: 'H', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'H6',  order: 6,  text: 'I would be tempted to stretch the truth if it helped me.', dimension: 'H', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'H7',  order: 7,  text: 'I prefer to live modestly rather than lavishly.', dimension: 'H', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'H8',  order: 8,  text: 'I avoid manipulating others to get what I want.', dimension: 'H', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'H9',  order: 9,  text: 'I would accept a bribe if it were substantial.', dimension: 'H', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'H10', order:10,  text: 'I see myself as a humble person.', dimension: 'H', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },

    // Emotionality (E) — 10
    { id: 'E1',  order:11,  text: 'I worry a lot about the future.', dimension: 'E', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'E2',  order:12,  text: 'I feel anxiety in uncertain situations.', dimension: 'E', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'E3',  order:13,  text: 'I get very attached to the people close to me.', dimension: 'E', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'E4',  order:14,  text: 'I can remain calm even in stressful situations.', dimension: 'E', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'E5',  order:15,  text: 'I seldom feel blue or down.', dimension: 'E', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'E6',  order:16,  text: 'I am fearful of dangerous situations.', dimension: 'E', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'E7',  order:17,  text: 'I feel strong emotional bonds with others.', dimension: 'E', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'E8',  order:18,  text: 'I handle emergencies without much worry.', dimension: 'E', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'E9',  order:19,  text: 'I often feel vulnerable and in need of support.', dimension: 'E', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'E10', order:20,  text: 'I can easily detach myself from upsetting events.', dimension: 'E', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },

    // eXtraversion (X) — 10
    { id: 'X1',  order:21,  text: 'I feel comfortable taking the lead in groups.', dimension: 'X', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'X2',  order:22,  text: 'I enjoy being the center of attention.', dimension: 'X', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'X3',  order:23,  text: 'I am talkative and outgoing.', dimension: 'X', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'X4',  order:24,  text: 'I tend to be quiet around strangers.', dimension: 'X', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'X5',  order:25,  text: 'I am full of energy in social situations.', dimension: 'X', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'X6',  order:26,  text: 'I prefer to keep in the background.', dimension: 'X', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'X7',  order:27,  text: 'I enjoy attending lively events or gatherings.', dimension: 'X', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'X8',  order:28,  text: 'I feel awkward in social situations.', dimension: 'X', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'X9',  order:29,  text: 'I feel confident when speaking in front of others.', dimension: 'X', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'X10', order:30,  text: 'I find it hard to start conversations.', dimension: 'X', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },

    // Agreeableness (A) — 10
    { id: 'A1',  order:31,  text: 'I am patient with others, even when they annoy me.', dimension: 'A', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'A2',  order:32,  text: 'I tend to criticize and find fault in others.', dimension: 'A', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'A3',  order:33,  text: 'I easily forgive people who have hurt me.', dimension: 'A', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'A4',  order:34,  text: 'I hold grudges for a long time.', dimension: 'A', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'A5',  order:35,  text: 'I am willing to compromise to keep the peace.', dimension: 'A', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'A6',  order:36,  text: 'I am often stubborn and uncooperative.', dimension: 'A', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'A7',  order:37,  text: 'I try to see things from other people’s perspectives.', dimension: 'A', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'A8',  order:38,  text: 'I am quick to argue when I disagree.', dimension: 'A', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'A9',  order:39,  text: 'I stay polite even when I am frustrated.', dimension: 'A', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'A10', order:40,  text: 'I prefer to confront people bluntly rather than be tactful.', dimension: 'A', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },

    // Conscientiousness (C) — 10
    { id: 'C1',  order:41,  text: 'I pay attention to details and double-check my work.', dimension: 'C', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'C2',  order:42,  text: 'I often leave tasks unfinished.', dimension: 'C', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'C3',  order:43,  text: 'I like to keep things organized and tidy.', dimension: 'C', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'C4',  order:44,  text: 'I find it hard to stick to a schedule.', dimension: 'C', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'C5',  order:45,  text: 'I follow through on my commitments.', dimension: 'C', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'C6',  order:46,  text: 'I am careless and make sloppy mistakes.', dimension: 'C', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'C7',  order:47,  text: 'I set goals and work steadily toward them.', dimension: 'C', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'C8',  order:48,  text: 'I act on impulse rather than planning ahead.', dimension: 'C', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'C9',  order:49,  text: 'I like to prepare carefully before starting tasks.', dimension: 'C', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'C10', order:50,  text: 'I’m fine with cutting corners to save effort.', dimension: 'C', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },

    // Openness to Experience (O) — 10
    { id: 'O1',  order:51,  text: 'I enjoy exploring new ideas and perspectives.', dimension: 'O', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'O2',  order:52,  text: 'I prefer familiar routines over new experiences.', dimension: 'O', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'O3',  order:53,  text: 'I appreciate art, music, or literature deeply.', dimension: 'O', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'O4',  order:54,  text: 'I am not very curious about different cultures or ideas.', dimension: 'O', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'O5',  order:55,  text: 'I enjoy thinking about abstract or theoretical concepts.', dimension: 'O', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'O6',  order:56,  text: 'I rarely try out new hobbies or activities.', dimension: 'O', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'O7',  order:57,  text: 'I notice beauty in my surroundings.', dimension: 'O', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'O8',  order:58,  text: 'I find it hard to understand complex ideas.', dimension: 'O', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'O9',  order:59,  text: 'I enjoy learning about topics outside my field.', dimension: 'O', reverse: false, weight: 1, responseType: 'likert', version: 1, active: true },
    { id: 'O10', order:60,  text: 'I rarely reflect on ideas from different viewpoints.', dimension: 'O', reverse: true,  weight: 1, responseType: 'likert', version: 1, active: true },
];





export type HexacoFacet =
    | 'Sincerity' | 'Fairness' | 'Greed-Avoidance' | 'Modesty'
    | 'Fearfulness' | 'Anxiety' | 'Dependence' | 'Sentimentality'
    | 'Social Self-Esteem' | 'Social Boldness' | 'Sociability' | 'Liveliness'
    | 'Forgiveness' | 'Gentleness' | 'Flexibility' | 'Patience'
    | 'Organization' | 'Diligence' | 'Perfectionism' | 'Prudence'
    | 'Aesthetic Appreciation' | 'Inquisitiveness' | 'Creativity' | 'Unconventionality';

const facetMap: Record<number, { facet: HexacoFacet; reverse: boolean }> = {
    // Honesty-Humility
    6:  { facet: 'Sincerity', reverse: false },
    30: { facet: 'Sincerity', reverse: true },
    54: { facet: 'Sincerity', reverse: false },
    12: { facet: 'Fairness', reverse: true },
    36: { facet: 'Fairness', reverse: false },
    60: { facet: 'Fairness', reverse: true },
    18: { facet: 'Greed-Avoidance', reverse: false },
    42: { facet: 'Greed-Avoidance', reverse: true },
    24: { facet: 'Modesty', reverse: true },
    48: { facet: 'Modesty', reverse: true },
    // Emotionality
    5:  { facet: 'Fearfulness', reverse: false },
    29: { facet: 'Fearfulness', reverse: false },
    53: { facet: 'Fearfulness', reverse: true },
    11: { facet: 'Anxiety', reverse: false },
    35: { facet: 'Anxiety', reverse: true },
    17: { facet: 'Dependence', reverse: false },
    41: { facet: 'Dependence', reverse: false },
    23: { facet: 'Sentimentality', reverse: false },
    47: { facet: 'Sentimentality', reverse: false },
    59: { facet: 'Sentimentality', reverse: true },
    // Extraversion
    4:  { facet: 'Social Self-Esteem', reverse: false },
    28: { facet: 'Social Self-Esteem', reverse: true },
    52: { facet: 'Social Self-Esteem', reverse: true },
    10: { facet: 'Social Boldness', reverse: true },
    34: { facet: 'Social Boldness', reverse: false },
    58: { facet: 'Social Boldness', reverse: false },
    16: { facet: 'Sociability', reverse: false },
    40: { facet: 'Sociability', reverse: false },
    22: { facet: 'Liveliness', reverse: false },
    46: { facet: 'Liveliness', reverse: true },
    // Agreeableness
    3:  { facet: 'Forgiveness', reverse: false },
    27: { facet: 'Forgiveness', reverse: false },
    9:  { facet: 'Gentleness', reverse: true },
    33: { facet: 'Gentleness', reverse: false },
    51: { facet: 'Gentleness', reverse: false },
    15: { facet: 'Flexibility', reverse: true },
    39: { facet: 'Flexibility', reverse: false },
    57: { facet: 'Flexibility', reverse: true },
    21: { facet: 'Patience', reverse: true },
    45: { facet: 'Patience', reverse: false },
    // Conscientiousness
    2:  { facet: 'Organization', reverse: false },
    26: { facet: 'Organization', reverse: true },
    8:  { facet: 'Diligence', reverse: false },
    32: { facet: 'Diligence', reverse: true },
    14: { facet: 'Perfectionism', reverse: false },
    38: { facet: 'Perfectionism', reverse: false },
    50: { facet: 'Perfectionism', reverse: false },
    20: { facet: 'Prudence', reverse: false },
    44: { facet: 'Prudence', reverse: true },
    56: { facet: 'Prudence', reverse: true },
    // Openness to Experience
    1:  { facet: 'Aesthetic Appreciation', reverse: true },
    25: { facet: 'Aesthetic Appreciation', reverse: false },
    7:  { facet: 'Inquisitiveness', reverse: false },
    31: { facet: 'Inquisitiveness', reverse: true },
    13: { facet: 'Creativity', reverse: false },
    37: { facet: 'Creativity', reverse: false },
    49: { facet: 'Creativity', reverse: true },
    19: { facet: 'Unconventionality', reverse: true },
    43: { facet: 'Unconventionality', reverse: false },
    55: { facet: 'Unconventionality', reverse: true },
};



export interface HexacoQuestionWithFacet extends HexacoQuestion {
    facet: HexacoFacet;
}

export const HEXACO_QUESTIONS_V1: HexacoQuestionWithFacet[] = BASE_QUESTIONS.map(q => {
    const facetInfo = facetMap[q.order];
    return facetInfo
        ? { ...q, facet: facetInfo.facet, reverse: facetInfo.reverse }
        : { ...q, facet: 'Sincerity' }; // fallback, update as needed
});


/**
 *

 * Convenience export for the current active version.
 */
export const HEXACO_QUESTIONS = HEXACO_QUESTIONS_V1;

/**
 * Optional: answer map type. For Likert, use integers 1–5.
 */
export type HexacoAnswerMap = Record<string, 1 | 2 | 3 | 4 | 5>;