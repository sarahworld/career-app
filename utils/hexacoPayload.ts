import { BASE_TEST_QUESTIONS } from '../assets/TestsQuestions/new_hexaco';

export interface HexacoSubmissionPayload {
    [dimension: string]: {
        [facet: string]: {
            [questionId: string]: string;
        };
    };
}

export const buildHexacoSubmissionPayload = (
    answers: Record<string, 1 | 2 | 3 | 4 | 5>
): HexacoSubmissionPayload => {
    const payload: HexacoSubmissionPayload = {};

    Object.entries(answers).forEach(([qNum, answer]) => {
        const num = parseInt(qNum, 10); // Convert string key to number
        const q = BASE_TEST_QUESTIONS[String(num)]; // Ensure string key for lookup
        if (!q) return;
        const { dimension, facet } = q;
        if (!payload[dimension]) payload[dimension] = {};
        if (!payload[dimension][facet]) payload[dimension][facet] = {};
        const questionKey = q.reverse ? `R${num}` : String(num);
        payload[dimension][facet][questionKey] = answer.toString(); // Convert answer to string
    });

    return payload;
};
